import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectMetadataService {

  constructor() { }

  getType(name) {

    return this.types[name];
  };
 
  types = {
    "ProductSearch" : {
      properties: [
        { name: "AssociationId", display: "ProductId", nodetype: "input", configuration: {type: "auto", selector : 'Product', validate: true} },
      ]     
    },
    "PromotionSearch" : {
      properties: [
        { name: "AssociationId", display: "PromotionId", nodetype: "input", configuration: {type: "auto", selector : 'Promotion', validate: false} },
      ]     
    },
    "CampaignSearch" : {
      properties: [
        { name: "AssociationId", display: "CampaignId", nodetype: "input", configuration: {type: "auto", selector : 'Campaign', validate: false} },
      ]     
    },
    "Interval" : {
      properties: [
        { name: "StartDate", nodetype: "input", configuration: {type: "datetime-local"} },
        { name: "IsActive", nodetype: "input", configuration: {type: "checkbox"} },
        { name: "Association", nodetype: "interface", required: true, configuration: { type: "IAssociation", types: ["Product","Promotion","Campaign"] } }, 
      ]
    },
    "Promotion": {
      properties: [
        { name: "PromotionId", nodetype: "input", configuration: {} },
        { name: "PromotionName", nodetype: "input", configuration: {} },
        { name: "PromotionDescription", nodetype: "input", configuration: {} },
        { name: "Scope", nodetype: "input", configuration: { type:"select" , values: ["Cart", "Item"] } },
        { name: "Category", nodetype: "input", configuration : {type: "auto", selector : 'Category', validate: false} },
        { name: "Assets", nodetype: "dictionary", configuration: { nodetype: "input", configuration: {} } }, 
        { name: "Promotion", nodetype: "interface", configuration: { type: "IPromotion", types: ["StandardPromotion"] } },
      ]
    },
    "Product": {
      properties: [
        { name: "ProductId", nodetype: "input", configuration: {type: "auto", selector : 'Product', validate: true} },
        { name: "Price", nodetype: "input", configuration: {type: "number"} },
        { name: "Assets", nodetype: "dictionary", configuration: { nodetype: "input", configuration: {} } }, 
      ]
    },
    "Campaign": {
      properties: [
        { name: "CampaignId", nodetype: "input", configuration: {} },
        { name: "Name", nodetype: "input", configuration: {} },
        { name: "Rank ", nodetype: "input", configuration: {type:"number"} },
        { name: "Groups", nodetype: "list", configuration: { nodetype: "input", configuration : {} } },
        { name: "Assets", nodetype: "dictionary", configuration: { nodetype: "input", configuration: {} } }, 
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
        { name: "Products", nodetype: "list", configuration: { nodetype: "input", configuration : { type: "auto", selector : 'Product', validate: true} } },
        { name: "Quantity", nodetype: "input", configuration: {type: "number"} }
      ]
    },
    "QuantityRule": {
      properties: [
        { name: "Product", nodetype: "input", configuration: {type: "auto", selector : 'Product', validate: true} },
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
