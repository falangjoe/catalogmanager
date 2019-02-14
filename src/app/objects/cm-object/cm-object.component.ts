import { Component, Input, Output, OnInit,  EventEmitter } from '@angular/core';
import { PromotionMetadataService } from '../../promotion-metadata.service';

@Component({
  selector: 'cm-object',
  templateUrl: './cm-object.component.html',
  styleUrls: ['./cm-object.component.css']
})
export class CmObjectComponent implements OnInit {

  constructor(private promotionMetadataService: PromotionMetadataService) { 

  }

  configurationValue;

  @Input()
  parentnodetype;

  @Input()
  set configuration(value){

    this.configurationValue = value;
  };

  get configuration(){
    return this.configurationValue;
  }


  @Input()
  nodetype;

  @Input ()
  name

  ngOnInit() {
  }

  //data

  dataValue;

  @Output() dataChange = new EventEmitter();


  get data(){
    return this.dataValue;
  }

  @Input()
  set data(val){
    this.dataValue = val;
  }


  setData(value){

    this.dataValue = value;
    this.dataChange.emit(this.dataValue); 
  }



  //interface functions

  get interfaceSelection(){

    if(this.data){
      return this.data.Type;
    }
  }

  interfaceSelectionChange(event){

    this.setData({ Type : event.value});
  }

  get interfaceInstanceConfiguration(){

    if(this.data){
      return {type : this.data.Type};
    }
   
  }

  interfaceInstanceDataChange(value){
    if(value){
      value.Type = this.data.Type;
    }
    this.setData(value);
  }

  //class functions

  propertiesValue;

  get properties(){

    if(!this.propertiesValue || this.propertiesValue.type !== this.configuration.type){

      var type = this.promotionMetadataService.getType(this.configuration.type);

      this.propertiesValue = {
        type : this.configuration.type, 
        properties : type.properties
      }; 
    }

    return this.propertiesValue.properties;
  };

  getPropertyData(name){
  
    if(this.data){
      var result =  this.data[name];
      return result;
    }
  }

  setPropertyData(name,value){

    if(value){
      var data = this.data || {};
      data[name] = value;
      this.setData(data);

    } 
  }

  //list functions

  get items(){
    return (this.data || []).map(x => true);
  }


  getItemData(index){

    if(this.data){
      return this.data[index];
    }
  }

  setItemData(index,value){

    var data = this.data || [];
    data[index] = value;
    this.setData(data);

  }

  deleteItem(index){
    let data = this.data.filter((x,i) => i !== index);
    this.setData(data);
  }

  addItem(){
    
    var data = this.data || [];
    data.push(undefined);
    this.setData(data);
  }







}
