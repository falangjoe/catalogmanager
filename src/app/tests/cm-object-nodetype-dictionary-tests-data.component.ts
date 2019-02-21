import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-dictionary-tests-data',
  template: `<cm-object  [formControl]="control" [nodetype]="nodetype" [configuration]="configuration" [name]="name"></cm-object>
  <button (click)="disable()">Disable</button>
  <button (click)="enable()">Enable</button>
  <button (click)="next()">Next Data</button>`,
  styles: []
})
export class CmObjectNodetypeDictionaryTestsDataComponent implements OnInit {

  private control : FormControl = new FormControl();

  public enable() {
    this.control.enable();
  }

  public disable() {
    this.control.disable();
  }

  private i = 0;
  private configuration : any = { nodetype: "input", configuration : { type: "auto", selector : 'product', validate: true} }
  private name = "The Name";
  private nodetype = "dictionary";

  public next(){

    var data = [
      {Product1 : "002562", Product2 : "004628", Product3 : "Bad Product"},
      {Product2 : "004628", Product3 : "Good Product"},
      {Product3 : "Bad Product"}
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
