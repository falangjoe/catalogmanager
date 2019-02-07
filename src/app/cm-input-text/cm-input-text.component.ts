import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'cm-input-text',
  templateUrl: './cm-input-text.component.html',
  styleUrls: ['./cm-input-text.component.css']
})
export class CmInputTextComponent implements OnInit {

  ngOnInit() {

  }

  inputValue : string;

  @Input()
  set data(value : string){
    this.inputValue = value || '';
  }

  @Output() 
  dataChange : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  name : string;

  @Input()
  configuration : any = {};

  inputChanged(event){ 
    let data : string = event.target.value;
    this.inputValue = data;
    this.dataChange.emit(data); 
  }

}


