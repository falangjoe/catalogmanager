import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cm-interval',
  templateUrl: './cm-interval.component.html',
  styleUrls: ['./cm-interval.component.css']
})
export class CmIntervalComponent implements OnInit {

  control;

  constructor(private catalogService: CatalogService) {
    this.control = new FormGroup({
      catalog : new FormControl(undefined, Validators.required), 
      interval : new FormControl(undefined, Validators.required) 
    })
   }

   submit(){

    let value = this.control.value;

    let catalog =  value.catalog;
    let interval = value.interval;

    this.catalogService.createInterval(catalog, interval);
   }

  ngOnInit() {

  }

}
