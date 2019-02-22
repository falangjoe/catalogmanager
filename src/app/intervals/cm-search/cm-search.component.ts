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

  constructor(private catalogService: CatalogService ) {
    this.control = new FormGroup({
      catalog : new FormControl(undefined, Validators.required), 
      association : new FormControl(undefined, Validators.required) 
    })
   }

   search(){

    var value = this.control.value;

    var query = {
      Environment : value.catalog.Environment,
      CatalogId : value.catalog.CatalogId,
      AssociationType : value.association.AssociationType,
      AssociationId : value.association.AssociationId
    };

    this.catalogService.search(query);
   }

  ngOnInit() {
  }

}
