import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionMetadataService {

  constructor() { }

  getType(name) {

    return this.types[name];
  };
 
  types = {
    "PromotionContainer": {
      properties: [
        { name: "PromotionId", nodetype: "input", configuration: {} },
        { name: "PromotionName", nodetype: "input", configuration: {} },
        { name: "PromotionDescription", nodetype: "input", configuration: {} },
        { name: "Active", nodetype: "input", configuration: {type:"checkbox"} },
        { name: "Scope", nodetype: "input", configuration: { type:"select" , values: ["Cart", "Item"] } },
        { name: "Category", nodetype: "input", configuration : {type: "auto", selector : 'category', validate: false} },
        { name: "Promotion", nodetype: "interface", configuration: { type: "IPromotion", types: ["StandardPromotion"] } },
      
      ]
    },
    "StandardPromotion": {
      properties: [
        { name: "Rules", nodetype: "list", configuration: { nodetype: "interface", configuration: { type: "IRule", types: ["QuantityRule", "GroupRule", "CouponRule", "AmountRule", "ProductRule"] } } },
        { name: "Rewards", nodetype: "list", configuration: { nodetype: "interface", configuration: { type: "IReward", types: ["DollarOffReward", "PercentOffReward", "PriceChangeReward", "RebateReward"] } } },
      ]
    },
    "ProductRule": {
      properties: [
        { name: "Products", nodetype: "list", configuration: { nodetype: "input", configuration : { type: "auto", selector : 'product', validate: true} } },
        { name: "Quantity", nodetype: "input", configuration: {type: "number"} }
      ]
    },
    "QuantityRule": {
      properties: [
        { name: "Product", nodetype: "input", configuration: {type: "auto", selector : 'product', validate: true} },
        { name: "Quantity", nodetype: "input", configuration: {type: "number"} }
      ]
    },
    "GroupRule": {
      properties: [
        { name: "Group", nodetype: "input", configuration: { values: ["GroupA", "GroupB"] } }
      ]
    },
    "CouponRule": {
      properties: [
        { name: "Coupon", nodetype: "input", configuration: { values: ["CouponA", "CouponB"] } }
      ]
    },
    "AmountRule": {
      properties: [
        { name: "Amount", nodetype: "input", configuration: {} }
      ]
    },
    "DollarOffReward": {
      properties: [
        { name: "DiscountCode", nodetype: "input", configuration: {} },
        { name: "SubCode", nodetype: "input", configuration: {} },
        { name: "Amount", nodetype: "input", configuration: {type: "number"} },
        { name: "Description", nodetype: "input", configuration: {} },
      ]
    },
    "PercentOffReward": {
      properties: [
        { name: "DiscountCode", nodetype: "input", configuration: {} },
        { name: "SubCode", nodetype: "input", configuration: {} },
        { name: "PercentOff", nodetype: "input", configuration: {type: "number"} },
        { name: "Description", nodetype: "input", configuration: {} },
      ]
    },
    "PriceChangeReward": {
      properties: [
        { name: "Price", nodetype: "input", configuration: {type: "number"} },
        { name: "Description", nodetype: "input", configuration: {} },
      ]
    },
    "RebateReward": {
      properties: [
        { name: "RebateCode", nodetype: "input", configuration: {} },
        { name: "Amount", nodetype: "input", configuration: {type: "number"} },
        { name: "Description", nodetype: "input", configuration: {} },
      ]
    }
  };

}
