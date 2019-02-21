import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-interface-tests-data',
  template: `<cm-object  [formControl]="control" [nodetype]="nodetype" [configuration]="configuration" [name]="name"></cm-object>
  <button (click)="disable()">Disable</button>
  <button (click)="enable()">Enable</button>
  <button (click)="next()">Next Data</button>`,
  styles: []
})
export class CmObjectNodetypeInterfaceTestsDataComponent implements OnInit {

  private control : FormControl = new FormControl('');

  public enable() {
    this.control.enable();
  }

  public disable() {
    this.control.disable();
  }

  private i = 0;
  private configuration : any =  { type: "IRule", types: ["QuantityRule", "GroupRule", "CouponRule", "AmountRule", "ProductRule"] };
  private name = "The Name";
  private nodetype = "interface";

  public next(){

      var data = [
        {Type : "QuantityRule", Quantity : 10, Product: "002562" },
        {Type : "ProductRule", Quantity : 5, Products: ["002562","Bad Product"]},
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
