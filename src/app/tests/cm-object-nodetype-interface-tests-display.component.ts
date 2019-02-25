import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-object-nodetype-interface-tests-display',
  template: `<cm-object  [formControl]="control" [nodetype]="nodetype" [configuration]="configuration" [name]="name"></cm-object>`,
  styles: []
})
export class CmObjectNodeTypeInterfaceTestsDisplayComponent implements OnInit {

  private control : FormControl = new FormControl('');

  private configuration = { property: "AssociationType",  types: [{type: "ProductAssociation", display: "Product"},{type: "PromotionAssociation", display: "Product"},{type: "CampaignAssociation", display: "Campaign"}] };
  private name = "The Name";
  private nodetype = "interface";

  ngOnInit(){  
    this.control.valueChanges.subscribe(x => {
      console.log(x);
      console.log("Valid : " + this.control.valid);
    });
  }
}
