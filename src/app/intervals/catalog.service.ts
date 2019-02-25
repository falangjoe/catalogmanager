import { Injectable, EventEmitter } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private searches;
  private creates;
  private shows;
  private intervals = [];

  constructor() { 

    this.searches = new EventEmitter<any[]>();
    this.creates = new EventEmitter<any>();
    this.shows = new EventEmitter<any>();

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

    let all = this.intervals
    .map(x => this.getAssociation(x.Interval));

    let matches = all
      .filter(x => associationType === x.AssociationType)
      .map(x => x.AssociationId as string); 
    
    var results = Array.from(new Set(matches));

    return of(results);
  }

  public createInterval(catalog,interval) : void {

    let obj = {Catalog : catalog, Interval : interval};

    this.intervals.push(obj);

    let association = this.getAssociation(interval);

    this.creates.emit({
      Catalog : catalog,
      Association : association
    })
  }

  private getAssociation(interval){

      if(interval.Association.Type == "Product"){
        return {
          AssociationType : "Product",
          AssociationId : interval.Association.ProductId
        };
      }
      else if(interval.Association.Type == "Campaign"){
        return {
          AssociationType : "Campaign",
          AssociationId : interval.Association.CampaignId
        };
      }
      else if(interval.Association.Type == "Promotion"){
        return {
          AssociationType : "Promotion",
          AssociationId : interval.Association.PromotionId
        };
      }

  }



  public getCreates() : Observable<any>{
    return this.creates;
  }  


  public getSearches() : Observable<any[]> {
    return this.searches;
  }

  public getShows() : Observable<any>{
    return this.shows;
  }

  public createShow(interval) : void{
    this.shows.emit(interval);
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