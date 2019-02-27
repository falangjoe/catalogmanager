import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-list-tests-data',
  template: `<cm-object  [formControl]="control" [nodetype]="nodetype" [configuration]="configuration" [name]="name"></cm-object>
  <button (click)="disable()">Disable</button>
  <button (click)="enable()">Enable</button>
  <button (click)="next()">Next Data</button>`,
  styles: []
})
export class CmObjectNodetypeListTestsDataComponent implements OnInit {

  private control : FormControl = new FormControl();

  public enable() {
    this.control.enable();
  }

  public disable() {
    this.control.disable();
  }

  private i = 0;
  private configuration : any = { nodetype: "input", configuration : { type: "auto", selector : 'Product', validate: true} }
  private name = "The Name";
  private nodetype = "list";

  public next(){

      var data = [
        ["002562","003598","What"],
        ["1"],
        ["Help","It","3","7","10"],
        []
        ];

      this.control.setValue(data[(this.i++) % 4],{emitEvent : false});
  }

  ngOnInit(){  
    this.control.valueChanges.subscribe(x => {
      console.log(x);
      console.log("Valid : " + this.control.valid);
    });
  }
}
