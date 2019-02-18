import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cm-input',
  templateUrl: './cm-input.component.html',
  styleUrls: ['./cm-input.component.css']
})
export class CmInputComponent implements OnInit {

  ngOnInit() {
   this.control.valueChanges.subscribe(
      {
        next: x => {
          this.dataChange.emit(x); 
        }
      });
  }
// 
  //inputValue : string;

  @Input()
  set data(value : string){
    this.control.setValue(value, {emitEvent : false});
  }

  @Output() 
  dataChange : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  name : string;

  @Input()
  configuration : any = {};

  // dataChanged(value){ 
  //   this.inputValue = value;
  //   this.dataChange.emit(value); 
  // }

  private control : FormControl = new FormControl(''); 


  // private _formControl : FormControl;

  // private get control() : FormControl{

  //   if(!this._formControl){
  //     this._formControl = new FormControl('');
  //   }

  //   return this._formControl;
  // } 

}


