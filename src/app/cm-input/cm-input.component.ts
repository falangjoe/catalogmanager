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


  dataValue;

  @Output() 
  dataChange = new EventEmitter(true);

  @Input()
  name;

  @Input()
  configuration = {};

  @Input() 
  get data(){
    return this.dataValue;
  }

  set data(val){
    
    this.dataValue = val || '';
    this.dataChange.emit(this.dataValue);

  }

  inputChanged(event){
    this.data = event.target.value;
 
  }

}


