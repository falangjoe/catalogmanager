import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CatalogService } from '../intervals/catalog.service';

@Injectable({
  providedIn: 'root'
})
export class InputMetadataService {

  private _catalogService;

  constructor(private catalogService: CatalogService) {
    this._catalogService = catalogService;
   }

  inputvalues(selector : string) : Observable<{id : string, name: string}[]>{

    if(selector === "Product"){
      return of([
        {id : "002562", name : "Biofinity Multifocal D 6pk"},
        {id : "003598", name : "Acuvue Oasys 1-Day 90pk"}, 
        {id : "004628", name : "Aquasoft by 1-800 Contacts 1pk"}]);
    }

    if(selector === "Category"){
      return of([
        {id : "Rebate", name : "Rebate"},
        {id : "Shipping", name : "Shipping"}]);
    }

    if(selector === "Campaign" || selector === "Promotion"){

      let associations = this._catalogService.getAssociations(selector);

      let mapping = map((list : string[]) => list.map(x => {
        return {id : x, name : x};
      }));

      let result = mapping(associations);

      return result;
    }


    if(selector === "Rebate")
    {
      return of([
        {id : "004826", name : "$90 AcOas1DA30 Reb 12M-2019b"},
        {id : "004827", name : "$90 DACPT90 Reb 12M-2019b"}, 
        {id : "004828", name : "$90 DailTot190 Reb 12M-2019b"}]);
    }


    if(selector === "Coupon")
    {
      return of([
        {id : "cord-exship-email", name : "cord-exship-email"},
        {id : "DEAL10", name : "DEAL10"}, 
        {id : "Bncex02", name : "Bncex02"}]);
    }


    if(selector === "Group")
    {
      return of([
        {id : "ReturningCustomer", name : "ReturningCustomer"},
        {id : "ReceivedAquasoft2WeekTrial", name : "ReceivedAquasoft2WeekTrial"}, 
        {id : "ReceivedAquasoft2WeekTrial", name : "ReceivedAquasoft2WeekTrial"}]);
    }

  }
}
