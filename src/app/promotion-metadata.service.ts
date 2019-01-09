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
        { name: "Promotion", nodetype: "interface", configuration: { type: "IPromotion", types: ["StandardPromotion"] } },
        { name: "Scope", nodetype: "input", configuration: { values: ["Cart", "Item"] } },
        { name: "Category", nodetype: "input", configuration: { values: [null, "Rebate", "Shipping"] } }
      ]
    },
    "StandardPromotion": {
      properties: [
        { name: "Rules", nodetype: "list", configuration: { nodetype: "interface", configuration: { type: "IRule", types: ["QuantityRule", "GroupRule", "CouponRule", "AmountRule"] } } },
        { name: "Rewards", nodetype: "list", configuration: { nodetype: "interface", configuration: { type: "IReward", types: ["DollarOffReward", "PercentOffReward", "PriceChangeReward", "RebateReward"] } } },
      ]
    },
    "QuantityRule": {
      properties: [
        { name: "ProductId", nodetype: "input", configuration: { values: ["003598", "003598"] } },
        { name: "Quantity", nodetype: "input", configuration: {} }
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
        { name: "Amount", nodetype: "input", configuration: {} },
        { name: "Description", nodetype: "input", configuration: {} },
      ]
    },
    "PercentOffReward": {
      properties: [
        { name: "DiscountCode", nodetype: "input", configuration: {} },
        { name: "SubCode", nodetype: "input", configuration: {} },
        { name: "PercentOff", nodetype: "input", configuration: {} },
        { name: "Description", nodetype: "input", configuration: {} },
      ]
    },
    "PriceChangeReward": {
      properties: [
        { name: "Price", nodetype: "input", configuration: {} },
        { name: "Description", nodetype: "input", configuration: {} },
      ]
    },
    "RebateReward": {
      properties: [
        { name: "RebateReward", nodetype: "input", configuration: {} },
        { name: "RebateCode", nodetype: "input", configuration: {} },
        { name: "Amount", nodetype: "input", configuration: {} },
        { name: "Description", nodetype: "input", configuration: {} },
      ]
    }
  };

}
