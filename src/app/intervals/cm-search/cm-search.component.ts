import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'cm-search',
  templateUrl: './cm-search.component.html',
  styleUrls: ['./cm-search.component.css']
})
export class CmSearchComponent implements OnInit {

  control;

  constructor(private catalogService: CatalogService) {
    this.control = new FormGroup({
      catalog : new FormControl(undefined, Validators.required), 
      association : new FormControl(undefined, Validators.required) 
    })
   }

   search(){

    let value = this.control.value;

    let catalog =  value.catalog;
    let query = value.association;

    this.catalogService.search(catalog, {AssociationId : query.AssociationId, AssociationType : query.Type.replace("Search", "") });
   }

  ngOnInit() {

  }

}
