import { Component } from '@angular/core';
import { CmObjectComponent } from './cm-object/cm-object.component';
import { CmInputComponent} from './cm-input/cm-input.component';
import {PromotionService} from './promotion.service'; 

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
        <cm-object [(data)]="data" [name]="name" [nodetype]="nodetype" [configuration]="configuration" (dataChange)="logdata($event)"></cm-object>
    </div>
    <button (click)="next()">Next</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

  constructor(private promotionService: PromotionService) { 

  }

//   data =   {
//     "PromotionId": "ENTERPRISE_06032016nb10",
//     "PromotionName": "06032016nb10",
//     "PromotionDescription": "$10 off order of $125 or more",
//     "Promotion": {
//         "Type": "StandardPromotion",
//         "Rules": [
//             {
//                 "Type": "CouponRule",
//                 "Coupon": "06032016nb10"
//             },
//             {
//                 "Type": "AmountRule",
//                 "Amount": 125
//             }
//         ],
//         "Rewards": [
//             {
//                 "Type": "DollarOffReward",
//                 "DiscountCode": "PRFA",
//                 "SubCode": "06032016nb10",
//                 "Amount": 10,
//                 "Description": "$10 off order of $125 or more"
//             }
//         ]
//     },
//     "Scope": "Cart",
//     "Category": "cart"
// };

//   data = undefined;
//   name = undefined;
//   index = 0;
//   nodetype = 'class';
//   configuration = { type : 'PromotionContainer'};
//   logdata(value){
//     console.log(value);
//   };
//   next(){
//     var promotions = this.promotionService.getPromotions();
//     this.data = promotions[this.index++];
//   }

  data : any = {
    Group : "The groups"
  };
  //data : any;
  name = undefined;
  index = 0;
  nodetype = 'class';
  configuration = { type : 'GroupRule'};
  logdata(value){
    console.log(value);
  };
  next(){
    this.configuration = { type : 'QuantityRule'};
    this.nodetype = 'class';
    this.data = {
        Quantity : "5",
        ProductId : "0163748"
    };
  
  }


//   data = undefined;
//   name = "Promotion";
//   nodetype="interface";
//   configuration =  { type: "IPromotion", types: ["StandardPromotion"] };





}


