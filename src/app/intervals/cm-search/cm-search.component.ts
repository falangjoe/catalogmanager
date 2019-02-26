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
      Catalog : new FormControl(undefined, Validators.required), 
      Association : new FormControl(undefined, Validators.required) 
    })
   }

   search(){

    let value = this.control.value;

    let catalog =  value.Catalog;
    let query = value.Association;

    this.catalogService.search(catalog, {AssociationId : query.AssociationId, AssociationType : query.Type.replace("Search", "") });
   }

  ngOnInit() {

    let self = this;
    this.catalogService.getCreates().subscribe(
      x => 
        {
          self.setControl(x.Catalog, x.Association);
          self.search();
        });

  this.catalogService.getDeletes().subscribe(
    x => 
      {
        self.setControl(x.Catalog, x.Association);
        self.search();
      });
  }

  private setControl(catalog, association) {

    let value = {Catalog: catalog, Association : {Type : association.AssociationType + "Search", AssociationId: association.AssociationId }};

    this.control.setValue(value, {emitEvent : false});
  }

}
