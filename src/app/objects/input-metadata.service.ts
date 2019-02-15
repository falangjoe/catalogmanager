import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputMetadataService {

  constructor() { }

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
  }
}
