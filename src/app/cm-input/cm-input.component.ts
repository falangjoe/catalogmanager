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
 
  get initialValue(){
    return this.data || '';
  };

  @Input()
  data

  @Output() 
  dataChange = new EventEmitter();

  @Input()
  name;

  @Input()
  configuration = {};

  inputChanged(event){
    console.log("input changed");
    console.log(event);
    var data = event.target.value;
    this.dataChange.emit(data); 
  }

}


