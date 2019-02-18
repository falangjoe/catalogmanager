import { Component, enableProdMode, OnInit  } from '@angular/core';
import {PromotionService} from './promotion.service'; 
import {FormControl,ValidatorFn, AbstractControl} from '@angular/forms';

enableProdMode();

// <cm-catalog [formControl]="control"></cm-catalog>
//<cm-input [formControl]="control" [configuration]="configuration" [name]="name"></cm-input>
//    <cm-input  [configuration]="configuration" [data]="data" [name]="name" (dataChange)="logdata($event)"></cm-input>
// <cm-object [(data)]="data" [name]="name" [nodetype]="nodetype" [configuration]="configuration" (dataChange)="logdata($event)"></cm-object>
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

  
  // ngOnInit() {

  //   this.control.valueChanges.subscribe(x => {
  //     console.log(x);
  //     console.log("Valid : " + this.control.valid);
  //   });

 

  // }

  // i=0;

  // next(){
  //   if((this.i++) % 2 === 0){
  //     this.control.disable();
  //   }else{
  //     this.control.enable();
  //   }

  //   console.log(this.control.value);

  // }

  // data = true;
  // control = new FormControl('');
  // name =  "Scope";
  // configuration = { type : "checkbox" };

  //   logdata(value){
  //   console.log(value);
  // };

  data;
  name = undefined;
  nodetype='class';
  configuration = { type : 'Interval' }
  logdata(value){
    console.log(value);
  };

  


  // data;
  // name = undefined;
  // nodetype = 'dictionary';
  // configuration = { nodetype:'input', configuration : {}};
  // i = 0;
  // next(){

  //   let a = [{property1 : "1"},{property2 : "2", property5 : "Hi Yah!"}]
  //   this.data = a[this.i++];
  // }
  // logdata(value){
  //   console.log(value);
  // };


  // data = true;
  // name = 'IsActive';
  // nodetype = 'input';
  // configuration = { };
  // logdata(value){
  //   console.log(value);
  // };



  //   configuration = {values : ["Cart","Item"], validate: true, type: "select"};
  // name="Scope";
  // data=null;
  // logdata(value){
  //   console.log(value);
  // };

  // configuration = {selector : 'product', validate: true, type: "auto"};
  // name="";
  // data="what";
  // logdata(value){
  //   console.log(value);
  // };

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

  // data = undefined;
  // name = undefined;
  // index = 0;
  // nodetype = 'class';
  // configuration = { type : 'PromotionContainer'};
  // logdata(value){
  //   console.log(value);
  // };
  // next(){
  //   var promotions = this.promotionService.getPromotions();
  //   this.data = promotions[this.index++];
  // }


  // data : any;
  // name = undefined;
  // index = 0;
  // nodetype = 'list';
  // configuration =  { nodetype: "class", configuration: {type: "QuantityRule"}};
  // logdata(value){
  //   console.log(value);
  // };
  // next(){


  //   this.configuration = { nodetype: "class", configuration: {type: "GroupRule"}};
    // var data = [
    //   {
    //     Type : "QuantityRule",
    //     Quantity : "7",
    //     ProductId : "0dafdsaf748"
    //   },
    //   {
    //     Type : "QuantityRule",
    //     Quantity : "5",
    //     ProductId : "0163748"
    //   }
    // ];

    // this.data = data[this.index++];
  //}


  // data : any;
  // name = undefined;
  // index = 0;
  // nodetype = 'interface';
  // configuration =  { type: "IRule", types: ["QuantityRule", "GroupRule", "CouponRule", "AmountRule"] };
  // logdata(value){
  //   console.log(value);
  // };
  // next(){

  //   var data = [
  //     {
  //     Type : "GroupRule",
  //     Group : "The groups"
  //     },
  //     {
  //       Type : "QuantityRule",
  //       Quantity : "5",
  //       ProductId : "0163748"
  //     },
  //     undefined
  //   ];

  //   this.data = data[this.index++];
  // }


  // data : any;
  // name = undefined;
  // index = 0;
  // nodetype = 'interface';
  // configuration : any =  { type: "IRule", types: ["QuantityRule", "GroupRule", "CouponRule", "AmountRule"] };
  // logdata(value){
  //   console.log(value);
  // };
  // next(){

    

  //   this.nodetype = 'class'
  //   this.configuration =  { type: "QuantityRule" };
  //   this.data =  {
  //           Type : "QuantityRule",
  //           Quantity : "5",
  //           ProductId : "0163748"
  //     };
  // }


  // data : any;
  // name = undefined;
  // index = 0;
  // nodetype = 'class';
  // configuration =  { type: "QuantityRule" };
  // logdata(value){
  //   console.log(value);
  // };
  // next(){

  //   var data = [
  //     {
  //       Type : "QuantityRule",
  //       Quantity : "7",
  //       ProductId : "0dafdsaf748"
  //     },
  //     {
  //       Type : "QuantityRule",
  //       Quantity : "5",
  //       ProductId : "0163748"
  //     }
  //   ];

  //   this.data = data[this.index++];
  // }



  // index = 0;
  // data : any;
  // name = undefined;
  // nodetype = 'input';
  // configuration =  {  };
  // logdata(value){
  //   console.log(value);
  // };
  // next(){

  //   var data = [
  //     "1111","2222"
  //   ];

  //   this.data = data[this.index++];
  // }


  // data : any;
  // name = undefined;
  // index = 0;
  // nodetype = 'class';
  // configuration =  { type: "CouponRule" };
  // logdata(value){
  //   console.log(value);
  // };
  // next(){

  //   var configurations = [ { type: "QuantityRule" },{type : "GroupRule"} ];

  //   var data = [
  //     {
  //       Type : "QuantityRule",
  //       Quantity : "7",
  //       ProductId : "0dafdsaf748"
  //     },
  //     {
  //       Group : "A groups"
  //     }
  //   ];

  //   let i = this.index++;

  //   this.data = data[i];

  //   this.configuration = configurations[i];
  // }
  



//   data = undefined;
//   name = "Promotion";
//   nodetype="interface";
//   configuration =  { type: "IPromotion", types: ["StandardPromotion"] };




}


