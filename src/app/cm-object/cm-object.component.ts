import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CmInputComponent } from '../cm-input/cm-input.component';
import { PromotionMetadataService } from '../promotion-metadata.service';

@Component({
  selector: 'cm-object',
  templateUrl: './cm-object.component.html',
  styleUrls: ['./cm-object.component.css']
})
export class CmObjectComponent implements OnInit {

  constructor(private promotionMetadataService: PromotionMetadataService) { 

  }

  @Input()
  configuration = undefined;

  @Input()
  type = undefined;

  @Input()
  nodetype = '';

  @Input ()
  name = ''

  ngOnInit() {
    console.log(this.nodetype);
    console.log("init cm-object : ");
    
  }

  dataValue = {};

  getPropertyData(name){

    var result = undefined;

    if(this.data){
      result = this.data[name];
    }

    //console.log("getPropertyData called :" + name);

    return result;

  }

  setPropertyData(name,value){
    //console.log("setPropertyData  called :" + name + ' ' + value);
    this.dataValue[name] = value;
    this.dataChange.emit(this.dataValue);

  }


  @Output() dataChange = new EventEmitter();

  @Input()
  get data(){
    return this.dataValue;
  }

  set data(val){
    this.dataValue = val;
    this.dataChange.emit(this.dataValue);
  }

  get properties(){
    if(this.nodetype == 'class'){
      var type = this.promotionMetadataService.getType(this.type);
      return type.properties;
    }
  }







}
