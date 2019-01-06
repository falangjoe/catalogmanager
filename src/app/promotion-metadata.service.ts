import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionMetadataService {

  constructor() { }

  getType(name){

      return this.types[name];
  };

  getInterface(name){

      return this.interfaces[name];
  
  };

  interfaces = {
    "IPromotion" : ["StandardPromotion"],
    "IRule" : ["QuantityRule","GroupRule","CouponRule","AmountRule"],
    "IReward" : ["DollarOffReward","PercentOffReward","PriceChangeReward","RebateReward"]
  };

  types = {
    "PromotionContainer" : {
      properties : [
        {name : "PromotionId", nodetype:"input", configuration: {}},
        {name : "PromotionName", nodetype:"input", configuration: {}},
        {name : "PromotionDescription", nodetype:"input", configuration: {}},
        {name : "Promotion", nodetype:"interface", type:"IPromotion"},
        {name : "Scope", nodetype:"input", configuration: { values:["Cart","Item"] } },
        {name : "Category", nodetype:"input", configuration: { values:[null,"Rebate","Shipping"] } }
      ]
    },
    "StandardPromotion" : {
      properties : [
        {name : "Rules", nodetype:"list", configuration: { nodetype:"interface", type:"IRule"}},
        {name : "Rewards", nodetype:"list", configuration: { nodetype:"interface", type:"IReward"}},
      ]
    },
    "QuantityRule" : {
      properties : [
        {name : "ProductId", nodetype:"input", configuration: { values:["003598","003598"] }},
        {name : "Quantity", nodetype:"input",  configuration: {}}
      ]
    },
    "GroupRule" : {
      properties : [
        {name : "Group", nodetype:"input", configuration: { values:["GroupA","GroupB"] }}
      ]
    },
    "CouponRule" : {
      properties : [
        {name : "Coupon", nodetype:"input", configuration: { values:["CouponA","CouponB"] }}
      ]
    },
    "AmountRule" : {
      properties : [
        {name : "Amount", nodetype:"input", configuration: { }}
      ]
    },
    "DollarOffReward" : {
      properties : [
        {name : "DiscountCode", nodetype:"input", configuration: {}},
        {name : "SubCode", nodetype:"input", configuration: {}},
        {name : "Amount", nodetype:"input", configuration: {}},
        {name : "Description", nodetype:"input", configuration: {}},
        {name : "Rule", nodetype:"class", type:"AmountRule", configuration: {}},
      ]
    },
    "PercentOffReward" : {
      properties : [
        {name : "DiscountCode", nodetype:"input", configuration: {}},
        {name : "SubCode", nodetype:"input", configuration: {}},
        {name : "PercentOff", nodetype:"input", configuration: {}},
        {name : "Description", nodetype:"input", configuration: {}},
      ]
    },
    "PriceChangeReward" : {
      properties : [
        {name : "Price", nodetype:"input", configuration: {}},
        {name : "Description", nodetype:"input", configuration: {}},
      ]
    },
    "RebateReward" : {
      properties : [
        {name : "RebateReward", nodetype:"input", configuration: {}},
        {name : "RebateCode", nodetype:"input", configuration: {}},
        {name : "Amount", nodetype:"input", configuration: {}},
        {name : "Description", nodetype:"input", configuration: {}},
      ]
    }
  };

}
