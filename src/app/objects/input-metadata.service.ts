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

  inputvalues(selector : string){

    if(selector === "product"){
      return of([
        {id : "002562", name : "Biofinity Multifocal D 6pk"},
        {id : "003598", name : "Acuvue Oasys 1-Day 90pk"}, 
        {id : "004628", name : "Aquasoft by 1-800 Contacts 1pk"}]);
    }

    if(selector === "category"){
      return of([
        {id : "Rebate", name : "Rebate"},
        {id : "Shipping", name : "Shipping"}]);
    }

    if(selector == "campaign" || selector == "promotion"){

      let associations = this._catalogService.getAssociations(selector);

      let mapping = map((x : string) => {
        return {id : x, name : x}
      });

      return mapping(associations);
    }
  }
}
