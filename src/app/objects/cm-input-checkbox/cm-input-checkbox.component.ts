import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'cm-input-checkbox',
  templateUrl: './cm-input-checkbox.component.html',
  styleUrls: ['./cm-input-checkbox.component.css']
})
export class CmInputCheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.control.valueChanges.subscribe(
      {
        next: x => {
          this.dataChange.emit(x); 
        }
      }
    );
  }


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
