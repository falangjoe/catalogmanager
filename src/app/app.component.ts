import { Component, enableProdMode, OnInit  } from '@angular/core';
import {PromotionService} from './promotion.service'; 

enableProdMode();

// <cm-catalog [formControl]="control"></cm-catalog>
//<cm-input [formControl]="control" [configuration]="configuration" [name]="name"></cm-input>
//    <cm-input  [configuration]="configuration" [data]="data" [name]="name" (dataChange)="logdata($event)"></cm-input>
// <cm-object [(data)]="data" [name]="name" [nodetype]="nodetype" [configuration]="configuration" (dataChange)="logdata($event)"></cm-object>
@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <cm-object-nodetype-dictionary-tests-data></cm-object-nodetype-dictionary-tests-data>
    </div>
  `,
  styles: []
})
export class AppComponent {

  constructor(private promotionService: PromotionService) { 

  }

}


