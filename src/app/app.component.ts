import { Component } from '@angular/core';
import { CmObjectComponent } from './cm-object/cm-object.component';
import { CmInputComponent} from './cm-input/cm-input.component' 

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
        <cm-object [(data)]="data" [name]="name" [nodetype]="nodetype" [type]="type"></cm-object>
    </div>
    <div>Contents</div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

  // data =          {
  //   "Type": "DollarOffReward",
  //   "DiscountCode": "PRFA",
  //   "SubCode": "06032016nb10",
  //   "Amount": 10,
  //   "Description": "$10 off order of $125 or more"
  // };
  data = [];
  name = undefined;
  nodetype = 'list';
  type = 'DollarOffReward'

}


