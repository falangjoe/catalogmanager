import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'cm-input',
  templateUrl: './cm-input.component.html',
  styleUrls: ['./cm-input.component.css']
})
export class CmInputComponent implements OnInit {

  ngOnInit() {

  }

  inputValue : string;

  @Input()
  set data(value : string){
    this.inputValue = value;
  }

  @Output() 
  dataChange : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  name : string;

  @Input()
  configuration : any = {};

  dataChanged(value){ 
    this.inputValue = value;
    this.dataChange.emit(value); 
  }

}


