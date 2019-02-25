import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-class-tests-display',
  template: `<cm-object  [formControl]="control" [nodetype]="nodetype" [configuration]="configuration" [name]="name"></cm-object>`,
  styles: []
})
export class CmObjectNodeTypeClassTestsDisplayComponent implements OnInit {

  private control : FormControl = new FormControl('');

  private configuration = { type: "ProductAssocation" };
  private name = "The Name";
  private nodetype = "class";

  ngOnInit(){  
    this.control.valueChanges.subscribe(x => {
      console.log(x);
      console.log("Valid : " + this.control.valid);
    });
  }
}
