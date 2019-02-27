import { Injectable, EventEmitter } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private searches = new EventEmitter<any>();
  private creates = new EventEmitter<any>();
  private shows = new EventEmitter<any>();
  private deletes = new EventEmitter<any>();
  private index = 1;

  private intervals = [
    {
      "Catalog": {
        "Environment": "Development",
        "CatalogId": "ENTERPRISE_1"
      },
      "Interval": {
        "IntervalId": this.getIndex(),
        "StartDate": "2019-02-25T11:00",
        "EndDate": "2019-02-26T11:00",
        "IsActive": true,
        "Association": {
          "ProductId": "002562",
          "Price": "10.00",
          "Assets": {
            "Key1": "Value1"
          },
          "Type": "Product"
        }
      }
    },
    {
      "Catalog": {
        "Environment": "Development",
        "CatalogId": "ENTERPRISE_1"
      },
      "Interval": {
        "IntervalId": this.getIndex(),
        "StartDate": "2019-02-26T11:00",
        "EndDate": "2019-02-27T10:00",
        "IsActive": true,
        "Association": {
          "ProductId": "002562",
          "Price": "12.00",
          "Assets": {
            "Key2": "Value2"
          },
          "Type": "Product"
        }
      }
    },
    {
      "Catalog": {
        "Environment": "Development",
        "CatalogId": "ENTERPRISE_1"
      },
      "Interval": {
        "IntervalId": this.getIndex(),
        "StartDate": "2019-02-27T10:00",
        "EndDate": null,
        "IsActive": false,
        "Association": {
          "ProductId": "002562",
          "Price": "12.00",
          "Assets": {
            "Key2": "Value2"
          },
          "Type": "Product"
        }
      }
    }

  ];

  constructor() {
  }

  getIndex() {
    this.index += 1;

    return (this.index).toString();
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

    interval["IntervalId"] = this.getIndex();

    let obj = {Catalog : catalog, Interval : interval};

    let association = this.getAssociation(interval);

    let existing = this.getIntervals(catalog,association);

    if(existing.length > 0){

      existing[0].EndDate = interval.StartDate;
    }

    this.intervals.push(obj);

    this.creates.emit({Catalog : catalog, Association : association});
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


  public getSearches() : Observable<any> {
    return this.searches;
  }

  public getShows() : Observable<any>{
    return this.shows;
  }

  public getDeletes() : Observable<any>{
    return this.deletes;
  }

  public createShow(catalog, interval) : void{
    this.shows.emit({catalog : catalog, interval : interval});
  }

  public search(catalog : any, association : any) : void {


    let intervals = this.getIntervals(catalog,association);
   
    let result = {Catalog : catalog, Intervals : intervals};

    this.searches.emit(result);
  }

  private getIntervals(catalog : any, association : any){

    let matches = this.intervals.filter(
      x => {
      
      let y = this.getAssociation(x.Interval);

      return catalog.CatalogId === x.Catalog.CatalogId
        && catalog.Environment === x.Catalog.Environment 
        && association.AssociationType === y.AssociationType 
        && association.AssociationId === y.AssociationId; 
    });

    let results = matches.map(x => x.Interval).sort(x => -1 * new Date(x.StartDate).getTime());

    return results;
  }

  public delete(catalog : any, interval : any) {

    let association = this.getAssociation(interval);
    let intervalId = interval.IntervalId;

    this.intervals = this.intervals.filter(x => {

      return !(catalog.CatalogId === x.Catalog.CatalogId
        &&  catalog.Environment === x.Catalog.Environment
        && intervalId === x.Interval.IntervalId);
    });

    this.deletes.emit({Catalog : catalog, Association : association});

  }
}