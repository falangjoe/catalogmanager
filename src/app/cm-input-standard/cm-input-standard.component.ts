import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-input-standard',
  templateUrl: './cm-input-standard.component.html',
  styleUrls: ['./cm-input-standard.component.css']
})
export class CmInputStandardComponent implements OnInit {

  ngOnInit() {
    this.control.valueChanges.subscribe(
      {
        next: x => {
          this.dataChange.emit(x); 
        }
      }
    );
  }


  //values

  //name

  @Input()
  name : string;

  //data

  @Input()
  set data(value : string){

    if(this.control.value !== value){
      this.control.setValue(value, {emitEvent : false});
    }
    
  }

 

  @Output() 
  dataChange : EventEmitter<string> = new EventEmitter<string>();

  //Configuration

  configurationValue;

  @Input()
  set configuration(value){
      
    this.configurationValue = value;
  }


  get configuration(){
    return this.configurationValue;
  }


  control = new FormControl('');


}
