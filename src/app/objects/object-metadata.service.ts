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
        { name: "AssociationId", display: "ProductId", nodetype: "input", configuration: {type: "auto", selector : 'Product', validate: true, required : true} },
      ]     
    },
    "PromotionSearch" : {
      properties: [
        { name: "AssociationId", display: "PromotionId", nodetype: "input", configuration: {type: "auto", selector : 'Promotion', validate: false, required : true} },
      ]     
    },
    "CampaignSearch" : {
      properties: [
        { name: "AssociationId", display: "CampaignId", nodetype: "input", configuration: {type: "auto", selector : 'Campaign', validate: false, required : true} },
      ]     
    },
    "Interval" : {
      properties: [
        { name: "StartDate", nodetype: "input", configuration: {type: "datetime-local"} },
        { name: "EndDate", nodetype: "input", configuration: {type: "datetime-local"} },
        { name: "Association", nodetype: "interface", configuration: { type: "IAssociation", types: ["Product","Promotion","Campaign"], required: true} }, 
      ]
    },
    "Promotion": {
      properties: [
        { name: "PromotionId", nodetype: "input" , configuration: {type: "auto", selector : 'Promotion', required: true}},
        { name: "PromotionName", nodetype: "input", configuration: {required: true} },
        { name: "PromotionDescription", nodetype: "input", configuration: {required: true} },
        { name: "Scope", nodetype: "input", configuration: { type:"select" , values: ["Cart", "Item"], required: true } },
        { name: "Category", nodetype: "input", configuration : {type: "auto", selector : 'Category', required: true} },
        { name: "Assets", nodetype: "dictionary", configuration: { nodetype: "input", configuration: { required: true } } }, 
        { name: "Promotion", nodetype: "interface", configuration: { type: "IPromotion", types: ["StandardPromotion"], required : true } },
      ]
    },
    "Product": {
      properties: [
        { name: "ProductId", nodetype: "input", configuration: {type: "auto", selector : 'Product', validate: true, required: true } },
        { name: "Price", nodetype: "input", configuration: {type: "number", required: true } },
        { name: "Assets", nodetype: "dictionary", configuration: { nodetype: "input", configuration: { required: true } } }, 
      ]
    },
    "Campaign": {
      properties: [
        { name: "CampaignId", nodetype: "input", configuration: {type: "auto", selector : 'Campaign', validate: true, required: true } },
        { name: "Name", nodetype: "input", configuration: {required: true } },
        { name: "Rank ", nodetype: "input", configuration: {type:"number", required: true } },
        { name: "Groups", nodetype: "list", configuration: { nodetype: "input", configuration : { required: true } } },
        { name: "Assets", nodetype: "dictionary", configuration: { nodetype: "input", configuration: { required: true } } }, 
      ]
    },
    "StandardPromotion": {
      properties: [
        { name: "Rules", nodetype: "list", configuration: { nodetype: "interface", configuration: { type: "IRule", required: true, types: ["QuantityRule", "GroupRule", "CouponRule", "AmountRule", "ProductRule"] } } },
        { name: "Rewards", nodetype: "list", configuration: { nodetype: "interface", configuration: { type: "IReward", required: true, types: ["DollarOffReward", "PercentOffReward", "PriceChangeReward", "RebateReward"] } } },
      ]
    },
    "ProductRule": {
      properties: [
        { name: "Products", nodetype: "list", configuration: { nodetype: "input", configuration : { type: "auto", selector : 'Product', validate: true, required: true} } },
        { name: "Quantity", nodetype: "input", configuration: {type: "number", required: true} }
      ]
    },
    "QuantityRule": {
      properties: [
        { name: "Product", nodetype: "input", configuration: {type: "auto", selector : 'Product', validate: true, required: true} },
        { name: "Quantity", nodetype: "input", configuration: {type: "number", required: true} }
      ]
    },
    "GroupRule": {
      properties: [
        { name: "Group", nodetype: "input",  configuration: { type: "auto", selector : 'Group', required: true} }
      ]
    },
    "CouponRule": {
      properties: [
        { name: "Coupon", nodetype: "input", configuration: { type: "auto", selector : 'Coupon', validate: true, required: true} }
      ]
    },
    "AmountRule": {
      properties: [
        { name: "Amount", nodetype: "input", configuration: {required : true} }
      ]
    },
    "DollarOffReward": {
      properties: [
        { name: "Amount", nodetype: "input", configuration: {type: "number", required : true} },
        { name: "Description", display: "Cart Message", nodetype: "input", configuration: {required : true} },
      ]
    },
    "PercentOffReward": {
      properties: [
        { name: "PercentOff", nodetype: "input", configuration: {type: "number", required : true} },
        { name: "Description", display: "Cart Message", nodetype: "input", configuration: {required : true} },
      ]
    },
    "PriceChangeReward": {
      properties: [
        { name: "Price", nodetype: "input", configuration: {type: "number", required : true} },
        { name: "Description", display: "Cart Message", nodetype: "input", configuration: {required : true} },
      ]
    },
    "RebateReward": {
      properties: [
        { name: "RebateCode", nodetype: "input", configuration: { type: "auto", selector : 'Rebate', validate: true, required: true} },
        { name: "Amount", nodetype: "input", configuration: {type: "number", required: true} },
        { name: "Description", display: "Cart Message", nodetype: "input", configuration: {required : true} },
      ]
    }
  };

}
