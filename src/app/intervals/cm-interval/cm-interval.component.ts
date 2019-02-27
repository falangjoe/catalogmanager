import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'cm-interval',
  templateUrl: './cm-interval.component.html',
  styleUrls: ['./cm-interval.component.css']
})
export class CmIntervalComponent implements OnInit {

  control : AbstractControl;

  constructor(private catalogService: CatalogService) {
    this.control = new FormGroup({
      catalog : new FormControl(undefined, Validators.required), 
      interval : new FormControl(undefined, Validators.required) 
    });

    let self = this;

    this.catalogService.getShows().subscribe(x => {
        self.control.setValue(x);
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
