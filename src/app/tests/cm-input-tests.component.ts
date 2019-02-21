import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-input-tests',
  template: `<cm-input [formControl]="control" [configuration]="configuration" [name]="name"></cm-input>
            <button (click)="disable()">Disable</button>
            <button (click)="enable()">Enable</button>
            <button (click)="next()">Next Configuration</button>`,
  styles: []
})
export class CmInputTestsComponent implements OnInit {

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

  public next(){

      var configurations = [
          { type: "select" , values: ["Cart", "Item"] },
          { type: "checkbox"},
          { type: "auto", selector : 'product', validate: true} ,
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
