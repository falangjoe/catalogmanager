import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-class-tests',
  templateUrl: './cm-object-nodetype-class-tests.component.html',
  styleUrls: ['./cm-object-nodetype-class-tests.component.css']
})
export class CmObjectNodetypeClassTestsComponent implements OnInit {

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

      var configurations = [
          { type: "ProductRule" },
          { type: "GroupRule" },
          { type: "QuantityRule"},
          { type: "DollarOffReward"}
        ];

      this.configuration = configurations[(this.i++) % 3];
  }

  ngOnInit(){  
    this.control.valueChanges.subscribe(x => {
      console.log(x);
      console.log("Valid : " + this.control.valid);
    });
  }
}
