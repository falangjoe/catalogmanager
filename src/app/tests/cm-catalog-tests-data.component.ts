import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-catalog-tests-data',
  template: `<cm-catalog [formControl]="control"></cm-catalog>
            <button (click)="next()">Next Data</button>`,
  styles: []
})
export class CmCatalogTestsDataComponent implements OnInit {

  private control : FormControl = new FormControl('');



  private i = 0;

  public next(){

      var data = [
          { CatalogId: "ENTERPRISE_1" , Environment: "Development"},
          { CatalogId: "CALLCENTER_1" , Environment: "Staging"},
        ];

      this.control.setValue(data[(this.i++) % 2],{emitEvent : false});

  }

  ngOnInit(){  
    this.control.valueChanges.subscribe(x => {
      console.log(x);
      console.log("Valid : " + this.control.valid);
    });
  }

}
