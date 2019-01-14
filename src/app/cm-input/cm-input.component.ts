import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

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

    console.log("set data called : " + value);
    this.inputValue = value || '';
  }

  get data() : string {
    return this.inputValue;
  }


  @Output() 
  dataChange : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  name : string;

  @Input()
  configuration : any = {};

  inputChanged(event){ 

    let data : string = event.target.value;

    console.log("input changed : " + data);
    this.data = data;
    //this.inputValue = data;
    this.dataChange.emit(data); 
  }

}


