import { Component } from '@angular/core';
import { CmObjectComponent } from './cm-object/cm-object.component';
import { CmInputComponent} from './cm-input/cm-input.component' 

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
        <cm-object [(data)]="data" [name]="name" [nodetype]="nodetype" [configuration]="configuration" (dataChange)="logdata($event)"></cm-object>
    </div>
    <div>Contents</div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {


  data =   {
    "PromotionId": "ENTERPRISE_06032016nb10",
    "PromotionName": "06032016nb10",
    "PromotionDescription": "$10 off order of $125 or more",
    "Promotion": {
        "Type": "StandardPromotion",
        "Rules": [
            {
                "Type": "CouponRule",
                "Coupon": "06032016nb10"
            },
            {
                "Type": "AmountRule",
                "Amount": 125
            }
        ],
        "Rewards": [
            {
                "Type": "DollarOffReward",
                "DiscountCode": "PRFA",
                "SubCode": "06032016nb10",
                "Amount": 10,
                "Description": "$10 off order of $125 or more"
            }
        ]
    },
    "Scope": "Cart",
    "Category": "cart"
};

  //data = undefined;
  name = undefined;
  nodetype = 'class';
  configuration = { type : 'PromotionContainer'};
  logdata(value){
    console.log(value);
  }

  // data = undefined;
  // name = "Promotion";
  // nodetype="interface";
  // configuration =  { type: "IPromotion", types: ["StandardPromotion"] };





}


