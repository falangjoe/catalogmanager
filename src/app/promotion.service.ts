import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(){
    return this.promotions;
  }

  promotions = [
        {
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
        },
        {
            "PromotionId": "ENTERPRISE_0617NEWB15P",
            "PromotionName": "0617NEWB15P",
            "PromotionDescription": "15% off order of $150 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "0617NEWB15P"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 150
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "PRPC",
                        "SubCode": "0617NEWB15P",
                        "PercentOff": 0.15,
                        "Description": "15% off order of $150 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_06302016unid",
            "PromotionName": "06302016unid",
            "PromotionDescription": "10% off order",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "06302016unid"
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "PRPC",
                        "SubCode": "06302016unid",
                        "PercentOff": 0.1,
                        "Description": "10% off order"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_0717AVO20OFF_1BOX",
            "PromotionName": "0717AVO20OFF_1BOX",
            "PromotionDescription": "$20 off one box or more of Acuvue Oasys 1-Day 90pk",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "0717AVO20OFF"
                    },
                    {
                        "Type": "QuantityRule",
                        "Product": "003598",
                        "Quantity": 1
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "0717AVO20OFF",
                        "Amount": 20,
                        "Description": "$20 off one box or more of Acuvue Oasys 1-Day 90pk"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "0717AVO20OFF"
        },
        {
            "PromotionId": "ENTERPRISE_0717AVO20OFF_8BOX",
            "PromotionName": "0717AVO20OFF_8BOX",
            "PromotionDescription": "$60 off an annual supply of Acuvue Oasys 1-Day 90pk",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "0717AVO20OFF"
                    },
                    {
                        "Type": "QuantityRule",
                        "Product": "003598",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "0717AVO20OFF",
                        "Amount": 60,
                        "Description": "$60 off an annual supply of Acuvue Oasys 1-Day 90pk"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "0717AVO20OFF"
        },
        {
            "PromotionId": "ENTERPRISE_20off200",
            "PromotionName": "20off200",
            "PromotionDescription": "$20 off order of $200 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "20off200"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 200
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "20off200",
                        "Amount": 20,
                        "Description": "$20 off order of $200 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_20PNW",
            "PromotionName": "20PNW",
            "PromotionDescription": "20% off order of $200 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "20PNW"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 200
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "PRPC",
                        "SubCode": "20PNW",
                        "PercentOff": 0.2,
                        "Description": "20% off order of $200 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_25off150",
            "PromotionName": "25off150",
            "PromotionDescription": "$25 off order of $150 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "25off150"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 150
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "25off150",
                        "Amount": 25,
                        "Description": "$25 off order of $150 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_30off150",
            "PromotionName": "30off150",
            "PromotionDescription": "$30 off order of $150 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "30off150"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 150
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "30off150",
                        "Amount": 30,
                        "Description": "$30 off order of $150 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_40OFF",
            "PromotionName": "40OFF",
            "PromotionDescription": "$40 off order of $200 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "40OFF"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 200
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "40OFF",
                        "Amount": 40,
                        "Description": "$40 off order of $200 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_ANTHEMDISCOUNT-TEMP",
            "PromotionName": "ANTHEMDISCOUNT-TEMP",
            "PromotionDescription": "10% off order",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "ANTHEMDISCOUNT-TEMP"
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "PRPC",
                        "SubCode": "ANTHEMDISCOUNT-TEMP",
                        "PercentOff": 0.1,
                        "Description": "10% off order"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_ANTHEMDISCOUNT-TEMP-SHIPPING",
            "PromotionName": "ANTHEMDISCOUNT-TEMP-SHIPPING",
            "PromotionDescription": "Free expedited shipping",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "SHIP_USA_EXPEDITED",
                        "Quantity": 1
                    },
                    {
                        "Type": "CouponRule",
                        "Coupon": "ANTHEMDISCOUNT-TEMP-SHIPPING"
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "SHIP",
                        "SubCode": null,
                        "PercentOff": 1,
                        "Description": "Free expedited shipping"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "item"
        },
        {
            "PromotionId": "ENTERPRISE_AQUASOFT_15PK_TRIAL",
            "PromotionName": "AQUASOFT_15PK_TRIAL",
            "PromotionDescription": "Free two week trial of Aquasoft",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "GroupRule",
                        "Group": "Trial_TwoWeek"
                    },
                    {
                        "Type": "QuantityRule",
                        "Product": "004627",
                        "Quantity": 1
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PriceChangeReward",
                        "Price": 0,
                        "Description": "Free two week trial of Aquasoft"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "item"
        },
        {
            "PromotionId": "ENTERPRISE_BXSSGROUP1",
            "PromotionName": "BXSSGROUP1",
            "PromotionDescription": "Free expedited shipping",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "SHIP_USA_EXPEDITED",
                        "Quantity": 1
                    },
                    {
                        "Type": "CouponRule",
                        "Coupon": "BXSSGROUP1"
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "SHIP",
                        "SubCode": "BXSSGROUP1",
                        "PercentOff": 1,
                        "Description": "Free expedited shipping"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "item"
        },
        {
            "PromotionId": "ENTERPRISE_BXWOGROUP1",
            "PromotionName": "BXWOGROUP1",
            "PromotionDescription": "10% off order of $150 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "BXWOGROUP1"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 150
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "PRPC",
                        "SubCode": "BXWOGROUP1",
                        "PercentOff": 0.1,
                        "Description": "10% off order of $150 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_coupon10",
            "PromotionName": "coupon10",
            "PromotionDescription": "$10 off order of $200 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "coupon10"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 200
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "coupon10",
                        "Amount": 10,
                        "Description": "$10 off order of $200 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_crmexpshp",
            "PromotionName": "crmexpshp",
            "PromotionDescription": "Free expedited shipping",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "SHIP_USA_EXPEDITED",
                        "Quantity": 1
                    },
                    {
                        "Type": "CouponRule",
                        "Coupon": "crmexpshp"
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "SHIP",
                        "SubCode": "crmexpshp",
                        "PercentOff": 1,
                        "Description": "Free expedited shipping"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "item"
        },
        {
            "PromotionId": "ENTERPRISE_DEAL10",
            "PromotionName": "DEAL10",
            "PromotionDescription": "$10 off order of $100 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "DEAL10"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 100
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "DEAL10",
                        "Amount": 10,
                        "Description": "$10 off order of $100 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_FIRSTTIMEAPP",
            "PromotionName": "First Time App Free Expedited Shipping",
            "PromotionDescription": "First Time App Free Expedited Shipping",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "SHIP_USA_EXPEDITED",
                        "Quantity": 1
                    },
                    {
                        "Type": "GroupRule",
                        "Group": "FIRSTTIMEAPP"
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "SHIP",
                        "SubCode": null,
                        "PercentOff": 1,
                        "Description": "Free expedited shipping"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "item"
        },
        {
            "PromotionId": "ENTERPRISE_free-shipping-on-all-orders-canada",
            "PromotionName": "free-shipping-on-all-orders-canada",
            "PromotionDescription": "Free standard shipping",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "SHIP_CAN_STANDARD",
                        "Quantity": 1
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "SHIP",
                        "SubCode": null,
                        "PercentOff": 1,
                        "Description": "Free standard shipping"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "item"
        },
        {
            "PromotionId": "ENTERPRISE_free-shipping-on-all-orders-domestic",
            "PromotionName": "free-shipping-on-all-orders-domestic",
            "PromotionDescription": "Free standard shipping",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "SHIP_USA_STANDARD",
                        "Quantity": 1
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "SHIP",
                        "SubCode": null,
                        "PercentOff": 1,
                        "Description": "Free standard shipping"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "item"
        },
        {
            "PromotionId": "ENTERPRISE_NI20OFF",
            "PromotionName": "NI20OFF",
            "PromotionDescription": "20% off order of $100 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "NI20OFF"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 100
                    }
                ],
                "Rewards": [
                    {
                        "Type": "PercentOffReward",
                        "DiscountCode": "PRPC",
                        "SubCode": "NI20OFF",
                        "PercentOff": 0.2,
                        "Description": "20% off order of $100 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_optntvpromo1",
            "PromotionName": "optntvpromo1",
            "PromotionDescription": "$10 off order.",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "optntvpromo1"
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "optntvpromo1",
                        "Amount": 10,
                        "Description": "$10 off order."
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001483",
            "PromotionName": "$100 1DMstMF90 Reb 12M-2017i",
            "PromotionDescription": "$100 1-Day Acuvue Moist Multi 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003453",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001483",
                        "Amount": 100,
                        "Description": "$100 1-Day Acuvue Moist Multi 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001485",
            "PromotionName": "$100 1DTrEye90A Reb 12M-2017i",
            "PromotionDescription": "$100 1-Day Acuvue Tru Eye A (90pk) rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002851",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001485",
                        "Amount": 100,
                        "Description": "$100 1-Day Acuvue Tru Eye A (90pk) rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001489",
            "PromotionName": "$120 AcOas1D90 Reb 12M-2017i",
            "PromotionDescription": "$120 Acuvue Oasys 1-Day 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003598",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001489",
                        "Amount": 120,
                        "Description": "$120 Acuvue Oasys 1-Day 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001490",
            "PromotionName": "$20 Acuv2 Reb 12M-2017i",
            "PromotionDescription": "$20 Acuvue 2 (6pk) rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000802",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001490",
                        "Amount": 20,
                        "Description": "$20 Acuvue 2 (6pk) rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001491",
            "PromotionName": "$20 FrColBlnds Reb 6M-2017i",
            "PromotionDescription": "$20 FreshLook Colorblends 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000732",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001491",
                        "Amount": 20,
                        "Description": "$20 FreshLook Colorblends 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001492",
            "PromotionName": "$20 FrColors Reb 6M-2017i",
            "PromotionDescription": "$20 FreshLook Colors (6pk) rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000455",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001492",
                        "Amount": 20,
                        "Description": "$20 FreshLook Colors (6pk) rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001493",
            "PromotionName": "$20 FrDimens Reb 6M-2017i",
            "PromotionDescription": "$20 FreshLook Dimensions 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001436",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001493",
                        "Amount": 20,
                        "Description": "$20 FreshLook Dimensions 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001494",
            "PromotionName": "$20 Freq55Tor Reb 12M-2017i",
            "PromotionDescription": "$20 Frequency 55 Toric 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000739",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001494",
                        "Amount": 20,
                        "Description": "$20 Frequency 55 Toric 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001495",
            "PromotionName": "$20 Sof38 Reb 12M-2017i",
            "PromotionDescription": "$20 Soflens 38 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000281",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001495",
                        "Amount": 20,
                        "Description": "$20 Soflens 38 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001496",
            "PromotionName": "$25 Biom 714 Tor Reb 12M-2017i",
            "PromotionDescription": "$25 Biomedics Toric 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001240",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001496",
                        "Amount": 25,
                        "Description": "$25 Biomedics Toric 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001497",
            "PromotionName": "$25 Biom II Asph Reb 12M-2017i",
            "PromotionDescription": "$25 Biomedics 55 Premier 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001533",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001497",
                        "Amount": 25,
                        "Description": "$25 Biomedics 55 Premier 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001499",
            "PromotionName": "$25 Clrti1D90 Reb 6M-2017i",
            "PromotionDescription": "$25 clariti 1-Day UV 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003165",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001499",
                        "Amount": 25,
                        "Description": "$25 clariti 1-Day UV 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001501",
            "PromotionName": "$25 Clrti1DMF90 Reb 6M-2017i",
            "PromotionDescription": "$25 clariti 1-Day MultifocalUV90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003192",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001501",
                        "Amount": 25,
                        "Description": "$25 clariti 1-Day MultifocalUV90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001503",
            "PromotionName": "$25 Clrti1DTor90 Reb 6M-2017i",
            "PromotionDescription": "$25 clariti 1-Day ToricUV 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003189",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001503",
                        "Amount": 25,
                        "Description": "$25 clariti 1-Day ToricUV 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001506",
            "PromotionName": "$25 ProcTor Reb 12M-2017i",
            "PromotionDescription": "$25 Proclear Toric 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001977",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001506",
                        "Amount": 25,
                        "Description": "$25 Proclear Toric 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001507",
            "PromotionName": "$25 PV MF Reb 12M-2017i",
            "PromotionDescription": "$25 Purevision Multifocal 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001824",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001507",
                        "Amount": 25,
                        "Description": "$25 Purevision Multifocal 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001508",
            "PromotionName": "$25 PV Reb 12M-2017i",
            "PromotionDescription": "$25 Purevision 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000803",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001508",
                        "Amount": 25,
                        "Description": "$25 Purevision 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001509",
            "PromotionName": "$25 PV Tor Reb 12M-2017i",
            "PromotionDescription": "$25 Purevision Toric 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001779",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001509",
                        "Amount": 25,
                        "Description": "$25 Purevision Toric 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001510",
            "PromotionName": "$25 Vert Tor Reb 12M-2017i",
            "PromotionDescription": "$25 Vertex Toric 6-pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000913",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001510",
                        "Amount": 25,
                        "Description": "$25 Vertex Toric 6-pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001513",
            "PromotionName": "$30 AirColors Reb 12M-2017i",
            "PromotionDescription": "$30 Air Optix Colors 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003095",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001513",
                        "Amount": 30,
                        "Description": "$30 Air Optix Colors 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001515",
            "PromotionName": "$30 Proc1DMF90 Reb 6M-2017i",
            "PromotionDescription": "$30 Proclear 1 Day Multifocal 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003308",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001515",
                        "Amount": 30,
                        "Description": "$30 Proclear 1 Day Multifocal 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001516",
            "PromotionName": "$30 SDD Ast30 Reb 6M-2017i",
            "PromotionDescription": "$30 Soflens Daily Dispos Astig 30p rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002444",
                        "Quantity": 12
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001516",
                        "Amount": 30,
                        "Description": "$30 Soflens Daily Dispos Astig 30p rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001517",
            "PromotionName": "$35 ClrSit1D90 Reb 12M-2017i",
            "PromotionDescription": "$35 ClearSight 1 Day 90 pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002049",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001517",
                        "Amount": 35,
                        "Description": "$35 ClearSight 1 Day 90 pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001519",
            "PromotionName": "$40 AcOasysAst Reb 12M-2017i",
            "PromotionDescription": "$40 Acuvue Oasys for Astig. 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002296",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001519",
                        "Amount": 40,
                        "Description": "$40 Acuvue Oasys for Astig. 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001521",
            "PromotionName": "$40 AirAquaND Reb 12M-2017i",
            "PromotionDescription": "$40 Air Optix Night & Day Aqua 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001248",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001521",
                        "Amount": 40,
                        "Description": "$40 Air Optix Night & Day Aqua 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001522",
            "PromotionName": "$40 BioTr1DPr30 Reb 6M-2017i",
            "PromotionDescription": "$40 Biotrue ONEday Presbyopia 30pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003305",
                        "Quantity": 12
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001522",
                        "Amount": 40,
                        "Description": "$40 Biotrue ONEday Presbyopia 30pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001525",
            "PromotionName": "$40 MyDay90 Reb 6M-2017i",
            "PromotionDescription": "$40 MyDay 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003418",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001525",
                        "Amount": 40,
                        "Description": "$40 MyDay 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001530",
            "PromotionName": "$40 Sofl MF Reb 12M-2017i",
            "PromotionDescription": "$40 Soflens Multifocal 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001374",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001530",
                        "Amount": 40,
                        "Description": "$40 Soflens Multifocal 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001532",
            "PromotionName": "$45 1DAcDef90 Reb 6M-2017i",
            "PromotionDescription": "$45 1-Day Acuvue Define 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003421",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001532",
                        "Amount": 45,
                        "Description": "$45 1-Day Acuvue Define 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001541",
            "PromotionName": "$45 AcOas1DA30 Reb 6M-2017i",
            "PromotionDescription": "$45 Acuvue Oasys 1-Day Astig 30pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "004209",
                        "Quantity": 12
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001541",
                        "Amount": 45,
                        "Description": "$45 Acuvue Oasys 1-Day Astig 30pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001542",
            "PromotionName": "$45 BiofTorXR Reb 12M-2017i",
            "PromotionDescription": "$45 Biofinity Toric XR 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003733",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001542",
                        "Amount": 45,
                        "Description": "$45 Biofinity Toric XR 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001544",
            "PromotionName": "$45 DACPMF90 Reb 6M-2017i",
            "PromotionDescription": "$45 Dailies AquaComfort MF 90 pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003094",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001544",
                        "Amount": 45,
                        "Description": "$45 Dailies AquaComfort MF 90 pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001548",
            "PromotionName": "$45 DailTot190 Reb 6M-2017i",
            "PromotionDescription": "$45 Dailies Total 1 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002968",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001548",
                        "Amount": 45,
                        "Description": "$45 Dailies Total 1 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001550",
            "PromotionName": "$45 DTot1MF90 Reb 6M-2017i",
            "PromotionDescription": "$45 Dailies Total 1 Multifocal90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003782",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001550",
                        "Amount": 45,
                        "Description": "$45 Dailies Total 1 Multifocal90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001551",
            "PromotionName": "$45 ProcMF-D Reb 12M-2017i",
            "PromotionDescription": "$45 Proclear Multifocal D 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001550",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001551",
                        "Amount": 45,
                        "Description": "$45 Proclear Multifocal D 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001552",
            "PromotionName": "$45 ProcMF-N Reb 12M-2017i",
            "PromotionDescription": "$45 Proclear Multifocal N 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "001549",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001552",
                        "Amount": 45,
                        "Description": "$45 Proclear Multifocal N 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001553",
            "PromotionName": "$45 PV2 Ast Reb 12M-2017i",
            "PromotionDescription": "$45 Purevision 2 for Astig 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002566",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001553",
                        "Amount": 45,
                        "Description": "$45 Purevision 2 for Astig 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001554",
            "PromotionName": "$45 PV2 MF Reb 12M-2017i",
            "PromotionDescription": "$45 Purevision 2 Multifocal 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002980",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001554",
                        "Amount": 45,
                        "Description": "$45 Purevision 2 Multifocal 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001555",
            "PromotionName": "$45 PV2 Reb 12M-2017i",
            "PromotionDescription": "$45 Purevision 2 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002534",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001555",
                        "Amount": 45,
                        "Description": "$45 Purevision 2 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001557",
            "PromotionName": "$50 1DMstMF90 Reb 6M-2017i",
            "PromotionDescription": "$50 1-Day Acuvue Moist Multi 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003453",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001557",
                        "Amount": 50,
                        "Description": "$50 1-Day Acuvue Moist Multi 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001559",
            "PromotionName": "$50 1DTrEye90A Reb 6M-2017i",
            "PromotionDescription": "$50 1-Day Acuvue Tru Eye A (90pk) rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002851",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001559",
                        "Amount": 50,
                        "Description": "$50 1-Day Acuvue Tru Eye A (90pk) rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001560",
            "PromotionName": "$50 AcVita Reb 12M-2017i",
            "PromotionDescription": "$50 Acuvue Vita 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003770",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001560",
                        "Amount": 50,
                        "Description": "$50 Acuvue Vita 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001561",
            "PromotionName": "$50 AirAquaMF Reb 12M-2017i",
            "PromotionDescription": "$50 Air Optix Aqua Multifocal 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002448",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001561",
                        "Amount": 50,
                        "Description": "$50 Air Optix Aqua Multifocal 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001562",
            "PromotionName": "$50 AirOptHyd Reb 12M-2017i",
            "PromotionDescription": "$50 Air Optix HydraGlyde 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003983",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001562",
                        "Amount": 50,
                        "Description": "$50 Air Optix HydraGlyde 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001563",
            "PromotionName": "$50 AvVital Reb 12M-2017i",
            "PromotionDescription": "$50 Avaira Vitality 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003920",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001563",
                        "Amount": 50,
                        "Description": "$50 Avaira Vitality 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001564",
            "PromotionName": "$50 Clrti1D90 Reb 12M-2017i",
            "PromotionDescription": "$50 clariti 1-Day UV 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003165",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001564",
                        "Amount": 50,
                        "Description": "$50 clariti 1-Day UV 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001566",
            "PromotionName": "$50 Clrti1DMF90 Reb 12M-2017i",
            "PromotionDescription": "$50 clariti 1-Day MultifocalUV90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003192",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001566",
                        "Amount": 50,
                        "Description": "$50 clariti 1-Day MultifocalUV90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001568",
            "PromotionName": "$50 Clrti1DTor90 Reb 12M-2017i",
            "PromotionDescription": "$50 clariti 1-Day ToricUV 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003189",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001568",
                        "Amount": 50,
                        "Description": "$50 clariti 1-Day ToricUV 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001574",
            "PromotionName": "$55 AirAquaAst Reb 12M-2017i",
            "PromotionDescription": "$55 Air Optix for Astigmatism 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002271",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001574",
                        "Amount": 55,
                        "Description": "$55 Air Optix for Astigmatism 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001578",
            "PromotionName": "$60 AcOasPres Reb 12M-2017i",
            "PromotionDescription": "$60 Acuvue Oasys for Presbyop 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002387",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001578",
                        "Amount": 60,
                        "Description": "$60 Acuvue Oasys for Presbyop 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001579",
            "PromotionName": "$60 AvVitTor Reb 12M-2017i",
            "PromotionDescription": "$60 Avaira Vitality Toric 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "004149",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001579",
                        "Amount": 60,
                        "Description": "$60 Avaira Vitality Toric 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001580",
            "PromotionName": "$60 BiofEnrg Reb 12M-2017i",
            "PromotionDescription": "$60 Biofinity Energys 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003947",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001580",
                        "Amount": 60,
                        "Description": "$60 Biofinity Energys 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001583",
            "PromotionName": "$60 BiofXR Reb 12M-2017i",
            "PromotionDescription": "$60 Biofinity XR 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002978",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001583",
                        "Amount": 60,
                        "Description": "$60 Biofinity XR 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001584",
            "PromotionName": "$60 Ultra Reb 12M-2017i",
            "PromotionDescription": "$60 Ultra 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003099",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001584",
                        "Amount": 60,
                        "Description": "$60 Ultra 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001585",
            "PromotionName": "$60 UltraAst Reb 12M-2017i",
            "PromotionDescription": "$60 Ultra for Astigmatism 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "004206",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001585",
                        "Amount": 60,
                        "Description": "$60 Ultra for Astigmatism 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001589",
            "PromotionName": "$75 Proc1DMF90 Reb 12M-2017i",
            "PromotionDescription": "$75 Proclear 1 Day Multifocal 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003308",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001589",
                        "Amount": 75,
                        "Description": "$75 Proclear 1 Day Multifocal 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001593",
            "PromotionName": "$80 SDD Ast30 Reb 12M-2017i",
            "PromotionDescription": "$80 Soflens Daily Dispos Astig 30p rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002444",
                        "Quantity": 24
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001593",
                        "Amount": 80,
                        "Description": "$80 Soflens Daily Dispos Astig 30p rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001595",
            "PromotionName": "$85 MyDay90 Reb 12M-2017i",
            "PromotionDescription": "$85 MyDay 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003418",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001595",
                        "Amount": 85,
                        "Description": "$85 MyDay 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001596",
            "PromotionName": "$85 UltraPres Reb 12M-2017i",
            "PromotionDescription": "$85 Ultra for Presbyopia 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003626",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001596",
                        "Amount": 85,
                        "Description": "$85 Ultra for Presbyopia 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001600",
            "PromotionName": "$90 1DAqCom+90 Reb 12M-2017i",
            "PromotionDescription": "$90 Dailies AquaComfort Plus 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002292",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001600",
                        "Amount": 90,
                        "Description": "$90 Dailies AquaComfort Plus 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001604",
            "PromotionName": "$90 1DMoist90 Reb 12M-2017i",
            "PromotionDescription": "$90 1-Day Acuvue Moist (90pk) rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002513",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001604",
                        "Amount": 90,
                        "Description": "$90 1-Day Acuvue Moist (90pk) rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001606",
            "PromotionName": "$90 1DMstAst90 Reb 12M-2017i",
            "PromotionDescription": "$90 1-Day Acuvue Moist Astig 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003326",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001606",
                        "Amount": 90,
                        "Description": "$90 1-Day Acuvue Moist Astig 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001607",
            "PromotionName": "$90 AcOas1DA30 Reb 12M-2017i",
            "PromotionDescription": "$90 Acuvue Oasys 1-Day Astig 30pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "004209",
                        "Quantity": 24
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001607",
                        "Amount": 90,
                        "Description": "$90 Acuvue Oasys 1-Day Astig 30pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001609",
            "PromotionName": "$90 DACPMF90 Reb 12M-2017i",
            "PromotionDescription": "$90 Dailies AquaComfort MF 90 pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003094",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001609",
                        "Amount": 90,
                        "Description": "$90 Dailies AquaComfort MF 90 pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001611",
            "PromotionName": "$90 DACPT90 Reb 12M-2017i",
            "PromotionDescription": "$90 Dailies AquaComfort Toric 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003091",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001611",
                        "Amount": 90,
                        "Description": "$90 Dailies AquaComfort Toric 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001613",
            "PromotionName": "$90 DailTot190 Reb 12M-2017i",
            "PromotionDescription": "$90 Dailies Total 1 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002968",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001613",
                        "Amount": 90,
                        "Description": "$90 Dailies Total 1 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001615",
            "PromotionName": "$90 DTot1MF90 Reb 12M-2017i",
            "PromotionDescription": "$90 Dailies Total 1 Multifocal90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003782",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001615",
                        "Amount": 90,
                        "Description": "$90 Dailies Total 1 Multifocal90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001618",
            "PromotionName": "$30 AirAqua Reb 12M-2017j",
            "PromotionDescription": "$30 Air Optix Aqua 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002325",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001618",
                        "Amount": 30,
                        "Description": "$30 Air Optix Aqua 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001619",
            "PromotionName": "$45 Biof Reb 12M-2017j",
            "PromotionDescription": "$45 Biofinity 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002080",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001619",
                        "Amount": 45,
                        "Description": "$45 Biofinity 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001620",
            "PromotionName": "$50 BiofMF-D Reb 12M-2017j",
            "PromotionDescription": "$50 Biofinity Multifocal D 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002562",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001620",
                        "Amount": 50,
                        "Description": "$50 Biofinity Multifocal D 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001621",
            "PromotionName": "$50 BiofMF-N Reb 12M-2017j",
            "PromotionDescription": "$50 Biofinity Multifocal N 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002564",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001621",
                        "Amount": 50,
                        "Description": "$50 Biofinity Multifocal N 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001622",
            "PromotionName": "$50 BiofTor Reb 12M-2017j",
            "PromotionDescription": "$50 Biofinity Toric 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002477",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001622",
                        "Amount": 50,
                        "Description": "$50 Biofinity Toric 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001625",
            "PromotionName": "$40 FDail90 Reb 12M-2017j",
            "PromotionDescription": "$40 Focus Dailies 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000722",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001625",
                        "Amount": 40,
                        "Description": "$40 Focus Dailies 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001626",
            "PromotionName": "$20 FDail90 Reb 6M-2017j",
            "PromotionDescription": "$20 Focus Dailies 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000722",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001626",
                        "Amount": 20,
                        "Description": "$20 Focus Dailies 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001632",
            "PromotionName": "$70 Proc1D90 Reb 12M-2017j",
            "PromotionDescription": "$70 Proclear 1 Day 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002148",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001632",
                        "Amount": 70,
                        "Description": "$70 Proclear 1 Day 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001634",
            "PromotionName": "$30 Sof66 Tor Reb 12M-2017j",
            "PromotionDescription": "$30 Soflens 66 Toric 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "000772",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001634",
                        "Amount": 30,
                        "Description": "$30 Soflens 66 Toric 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001635",
            "PromotionName": "$70 SDD90 Reb 12M-2017j",
            "PromotionDescription": "$70 Soflens Daily Disposable 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002289",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001635",
                        "Amount": 70,
                        "Description": "$70 Soflens Daily Disposable 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001638",
            "PromotionName": "$40 AcVitaAst Reb 12M-2017l",
            "PromotionDescription": "$40 Acuvue Vita for Astigmatism6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "004379",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001638",
                        "Amount": 40,
                        "Description": "$40 Acuvue Vita for Astigmatism6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001640",
            "PromotionName": "$40 AcOasys24 Reb 12M-2017k",
            "PromotionDescription": "$40 Acuvue Oasys 24pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002736",
                        "Quantity": 2
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001640",
                        "Amount": 40,
                        "Description": "$40 Acuvue Oasys 24pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001643",
            "PromotionName": "$80 BioTru1D90 Reb 12M-2017n",
            "PromotionDescription": "$80 Biotrue ONEday 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002729",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001643",
                        "Amount": 80,
                        "Description": "$80 Biotrue ONEday 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001644",
            "PromotionName": "$80 SDD90 Reb 12M-2017n",
            "PromotionDescription": "$50 Soflens Daily Disposable 90pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002289",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001644",
                        "Amount": 50,
                        "Description": "$50 Soflens Daily Disposable 90pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001645",
            "PromotionName": "$40 Avaira Reb 12M-2017o",
            "PromotionDescription": "$40 Avaira 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002287",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001645",
                        "Amount": 40,
                        "Description": "$40 Avaira 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001646",
            "PromotionName": "$40 AvairaTor Reb 12M-2017o",
            "PromotionDescription": "$40 Avaira Toric 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002518",
                        "Quantity": 8
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001646",
                        "Amount": 40,
                        "Description": "$40 Avaira Toric 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001647",
            "PromotionName": "$80 BioTr1DPr30 Reb 12M-2017o",
            "PromotionDescription": "$80 Biotrue ONEday Presbyopia 30pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "003305",
                        "Quantity": 24
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001647",
                        "Amount": 80,
                        "Description": "$80 Biotrue ONEday Presbyopia 30pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_rebate-10000001648",
            "PromotionName": "$45 Biof Reb 12M-2017o",
            "PromotionDescription": "$45 Biofinity 6pk rebate",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "QuantityRule",
                        "Product": "002080",
                        "Quantity": 4
                    }
                ],
                "Rewards": [
                    {
                        "Type": "RebateReward",
                        "RebateCode": "10000001648",
                        "Amount": 45,
                        "Description": "$45 Biofinity 6pk rebate"
                    }
                ]
            },
            "Scope": "Item",
            "Category": "rebate"
        },
        {
            "PromotionId": "ENTERPRISE_RMN180",
            "PromotionName": "RMN180",
            "PromotionDescription": "$20 off order of $180 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "RMN180"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 180
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "RMN180",
                        "Amount": 20,
                        "Description": "$20 off order of $180 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_RMNREPEAT",
            "PromotionName": "RMNREPEAT",
            "PromotionDescription": "$20 off order of $200 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "RMNREPEAT"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 200
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "RMNREPEAT",
                        "Amount": 20,
                        "Description": "$20 off order of $200 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_sc-30off200",
            "PromotionName": "sc-30off200",
            "PromotionDescription": "$30 off order of $200 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "sc-30off200"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 200
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "sc-30off200",
                        "Amount": 30,
                        "Description": "$30 off order of $200 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_SC6115TOOB",
            "PromotionName": "SC6115TOOB",
            "PromotionDescription": "$20 off order of $150 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "SC6115TOOB"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 150
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "SC6115TOOB",
                        "Amount": 20,
                        "Description": "$20 off order of $150 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
        {
            "PromotionId": "ENTERPRISE_TAKE10",
            "PromotionName": "TAKE10",
            "PromotionDescription": "$10 off order of $200 or more",
            "Promotion": {
                "Type": "StandardPromotion",
                "Rules": [
                    {
                        "Type": "CouponRule",
                        "Coupon": "TAKE10"
                    },
                    {
                        "Type": "AmountRule",
                        "Amount": 200
                    }
                ],
                "Rewards": [
                    {
                        "Type": "DollarOffReward",
                        "DiscountCode": "PRFA",
                        "SubCode": "TAKE10",
                        "Amount": 10,
                        "Description": "$10 off order of $200 or more"
                    }
                ]
            },
            "Scope": "Cart",
            "Category": "cart"
        },
    ];
}
