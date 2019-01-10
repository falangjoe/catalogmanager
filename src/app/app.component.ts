import { Component } from '@angular/core';
import { CmObjectComponent } from './cm-object/cm-object.component';
import { CmInputComponent} from './cm-input/cm-input.component' 

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
        <cm-object [(data)]="data" [name]="name" [nodetype]="nodetype" [configuration]="configuration" (dataChange)="logdata($event)"></cm-object>
    </div>
    <div>Contents</div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {


  data = undefined;
  name = undefined;
  nodetype = 'class';
  configuration = { type : 'PromotionContainer'};
  logdata(value){
    //console.log(value);
  }



}


