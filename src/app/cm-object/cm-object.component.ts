import { Component, Input, Output, OnInit,  EventEmitter } from '@angular/core';
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
    
  }



  dataValue;

  @Output() dataChange = new EventEmitter(true);

  @Input()
  get data(){
    return this.dataValue;
  }

  set data(val){
    this.dataValue = val;
    this.dataChange.emit(this.dataValue);
    console.log(this.data);
  }


  //object functions

  getPropertyData(name){
    if(this.data){
      var result =  this.data[name];
      return result;
    }
  }

  setPropertyData(name,value){

    var dataValue = this.dataValue || {};
    dataValue[name] = value;
    this.data = dataValue;

  }

  get properties(){
    if(this.nodetype == 'class'){
      var type = this.promotionMetadataService.getType(this.type);
      return type.properties;
    }
  }







}
