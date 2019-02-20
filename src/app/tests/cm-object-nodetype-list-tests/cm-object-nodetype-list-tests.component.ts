import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-list-tests',
  templateUrl: './cm-object-nodetype-list-tests.component.html',
  styleUrls: ['./cm-object-nodetype-list-tests.component.css']
})
export class CmObjectNodetypeListTestsComponent implements OnInit {

  private control : FormControl = new FormControl('');

  public enable() {
    this.control.enable();
  }

  public disable() {
    this.control.disable();
  }

  private i = 0;
  private configuration : any = { nodetype: "input", configuration : { type: "auto", selector : 'product', validate: true} }
  private name = "The Name";
  private nodetype = "list";

  public next(){

      var configurations = [
          { nodetype: "class", configuration : { type: "DollarOffReward" }},
          { nodetype: "input", configuration : { type: "auto", selector : 'product', validate: true} },
        ];

      this.configuration = configurations[(this.i++) % 2];
  }

  ngOnInit(){  
    this.control.valueChanges.subscribe(x => {
      console.log(x);
      console.log("Valid : " + this.control.valid);
    });
  }

}
