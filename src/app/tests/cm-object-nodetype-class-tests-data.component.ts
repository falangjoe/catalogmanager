import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-class-tests-data',
  template: `<cm-object  [formControl]="control" [nodetype]="nodetype" [configuration]="configuration" [name]="name"></cm-object>
  <button (click)="disable()">Disable</button>
  <button (click)="enable()">Enable</button>
  <button (click)="next()">Next Data</button>`,
  styles: []
})
export class CmObjectNodetypeClassTestsDataComponent implements OnInit {
  
  private control : FormControl = new FormControl('');

  public enable() {
    this.control.enable();
  }

  public disable() {
    this.control.disable();
  }

  private i = 0;
  private configuration = { type: "DollarOffReward" };
  private name = "Reward";
  private nodetype = "class";

  public next(){

    var data = [
      {DiscountCode : "discountA", SubCode: "subcodeA", Amount: 10.00, Description: "this is a test discounta"},
      {DiscountCode : "discountb", SubCode: "subcodeb", Amount: 11.00, Description: "this is a test discountb"},
      {DiscountCode : "discountc", SubCode: "subcodec", Amount: 12.00, Description: "this is a test discountc"},
      {DiscountCode : "discountd", SubCode: undefined, Amount: 13.00, Description: "this is a test discountd"},
      ];

    this.control.setValue(data[(this.i++) % 3],{emitEvent : false});
  }

  ngOnInit(){  
    this.control.valueChanges.subscribe(x => {
      console.log(x);
      console.log("Valid : " + this.control.valid);
    });
  }
}
