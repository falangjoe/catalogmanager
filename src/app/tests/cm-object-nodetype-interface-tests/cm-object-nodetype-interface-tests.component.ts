import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-interface-tests',
  templateUrl: './cm-object-nodetype-interface-tests.component.html',
  styleUrls: ['./cm-object-nodetype-interface-tests.component.css']
})
export class CmObjectNodetypeInterfaceTestsComponent implements OnInit {

  private control : FormControl = new FormControl('');

  public enable() {
    this.control.enable();
  }

  public disable() {
    this.control.disable();
  }

  private i = 0;
  private configuration : any = { type: "IRule", types: ["QuantityRule", "GroupRule", "CouponRule", "AmountRule", "ProductRule"] };
  private name = "The Name";
  private nodetype = "interface";

  public next() {

      var configurations = [
          { type: "IAssociation", types: ["Product","Promotion","Campaign"] },
          { type: "IRule", types: ["QuantityRule", "GroupRule", "CouponRule", "AmountRule", "ProductRule"] },
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
