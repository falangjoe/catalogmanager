import { Injectable, EventEmitter } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private searches;
  private creates;
  private intervals = [];

  constructor() { 

    this.searches = new EventEmitter<any[]>();
    this.creates = new EventEmitter<any>();

  }

  getEnvironments(){

    return of([
      "Development",
      "Staging", 
      "Production"]);
  }

  getCatalogs(environment){

    var catalogs = {
      "Development" : [
        "callcenter_1",
        "ENTERPRISE_1",
        "ENTERPRISE_2",
        "MOBILE_24",
        "MOBILE_25",
        "PROMOMGR-TEST-CATALOG",
        "WEBSITE_1",
        "WEBSITE_82f354c0-6454-4d98-a817-e6bde60652c9"
      ],
      "Staging" : [
        "CALLCENTER_1",
        "ENTERPRISE_1",
        "MOBILE_24",
        "MOBILE_25",
        "WEBSITE_1",
        "WEBSITE_f44156cb-20dd-4c36-92a7-91dc186c39dc"
      ],
      "Production" : [
        "CallCenter_1",
        "MOBILE_24",
        "MOBILE_25",
        "WEBSITE_1",
      ]
    };

    return of(catalogs[environment]);

  }


  public getAssociations(associationType : string) : Observable<string[]>{

    //need to limit by catalog and environment or show all?
    let matches = this.intervals
      .filter(
        x => 
          associationType === x.Interval.Association.Type
        )
      .map(x => x.AssocationId as string); 
    
    var results = Array.from(new Set(matches));

    return of(results);
  }

  public createInterval(catalog,interval) : void {

    this.intervals.push({Catalog : catalog, Interval : interval});

    let association = this.getAssociations(interval);

    this.creates.emit({
      Catalog : catalog,
      Assocation : association
    })
  }

  private getAssociation(interval){

      if(interval.Assocation.Type == "Product"){
        return {
          AssocationType : "Product",
          AssociationId : interval.Assocation.ProductId
        };
      }
      else if(interval.Assocation.Type == "Campaign"){
        return {
          AssocationType : "Campaign",
          AssociationId : interval.Assocation.CampaignId
        };
      }
      else if(interval.Assocation.Type == "Promotion"){
        return {
          AssociationType : "Promotion",
          AssociationId : interval.Assocation.PromotionId
        };
      }

  }



  public getCreates() : Observable<any>{
    return this.creates;
  }  


  public getSearches() : Observable<any[]> {
    return this.searches;
  }

  public search(catalog : any, query : any) : void {
    let matches = this.intervals.filter(
      x => {
      
      let association = this.getAssociation(x.Interval);

      return catalog.CatalogId === x.Catalog.CatalogId
        && catalog.Environment === x.Catalog.Environment 
        && query.AssociationType === association.AssociationType 
        && (query.ProductId && query.AssocationId
      ); 
    })

    this.searches.emit(matches);
  }

}