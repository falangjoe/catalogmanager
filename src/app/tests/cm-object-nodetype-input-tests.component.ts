import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-input-tests',
  template: `<cm-object  [formControl]="control" [nodetype]="nodetype" [configuration]="configuration" [name]="name"></cm-object>
  <button (click)="disable()">Disable</button>
  <button (click)="enable()">Enable</button>
  <button (click)="next()">Next Configuration</button>`,
  styles: []
})
export class CmObjectNodetypeInputTestsComponent implements OnInit {
  
  private control : FormControl = new FormControl('');

  public enable() {
    this.control.enable();
  }

  public disable() {
    this.control.disable();
  }

  private i = 0;
  private configuration = {};
  private name = "The Name";
  private nodetype = "input";

  public next(){

      var configurations = [
          { type: "select" , values: ["Cart", "Item"] },
          { type: "checkbox"},
          { type: "auto", selector : 'Product', validate: true} ,
          { type: "datetime-local"}
        ];

      this.configuration = configurations[(this.i++) % 4];
  }

  ngOnInit(){  
    this.control.valueChanges.subscribe(x => {
      console.log(x);
      console.log("Valid : " + this.control.valid);
    });
  }
}
