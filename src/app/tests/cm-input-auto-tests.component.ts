import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-input-auto-tests',
  template: `<cm-input [formControl]="control" [configuration]="configuration" [name]="name"></cm-input>
            <div>Valid : {{this.control.valid}}</div>
            <div>Value : {{this.control.value}}</div>`,
  styles: []
})
export class CmInputAutoTestsComponent implements OnInit {

  private control : FormControl = new FormControl();

 
  //private configuration =  { type: "auto", selector : 'Product', validate: true, required : true};
  //private configuration =  { required : true};
  //private configuration = { type: "select" , values: ["Cart", "Item"], required : true };
  private configuration = { type: "checkbox" , required : true };
  private name = "The Name";

 

  ngOnInit(){  
    this.control.valueChanges.subscribe(x => {
      console.log(x);
      console.log("Valid : " + this.control.valid);
    });
  }

}
