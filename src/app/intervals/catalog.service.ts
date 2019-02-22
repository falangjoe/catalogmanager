import { Injectable, EventEmitter } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private searches;
  private intervals = [];

  constructor() { 

    this.searches = new EventEmitter<any[]>();

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




  public getSearches() : Observable<any[]> {

    return this.searches;

  }

  public search(query : any) : void {
    let matches = this.intervals.filter(
      x => 

        query.CatalogId === x.Catalog.CatalogId
        && query.Environment === x.Catalog.Environment 
        && query.AssociationType === x.Interval.Association.Type 
        && (x.Interval.Assocation.ProductId && query.AssocationId === x.Interval.Assocation.ProductId)
        && (x.Interval.Assocation.CampaignId && query.AssocationId === x.Interval.Assocation.CampaignId)
        && (x.Interval.Assocation.PromotionId && query.AssocationId === x.Interval.Assocation.PromotionId)
        ); 

    this.searches.emit(matches);
  }

}