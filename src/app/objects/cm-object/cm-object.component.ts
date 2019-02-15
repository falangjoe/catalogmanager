import { Component, Input, Output, OnInit,  EventEmitter } from '@angular/core';
import { ObjectMetadataService } from '../object-metadata.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'cm-object',
  templateUrl: './cm-object.component.html',
  styleUrls: ['./cm-object.component.css']
})
export class CmObjectComponent implements OnInit {

  constructor(private objectMetadataService: ObjectMetadataService) { 

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

    if(this.dataValue !== val && this.dictionaryValue){
      this.dictionaryValue = undefined;
    }

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

  //dictionary

  dictionaryValue;

  setDictionaryData(value){

    var result = {};

    this.dictionaryValue = value;

    value.forEach(x => {
      if(x && x.Key){
          result[x.Key] = x.Value;
      }
    });

    this.setData(result);
  }

  getDictionaryData(){
    
    if(!this.dictionaryValue){

      if(this.data){
        
        var keys = Object.keys(this.data);

        this.dictionaryValue = keys.map(x => {
          return {Key : x, Value : this.data[x]};
        });

      }
      else {
        this.dictionaryValue = [];
      }
 
    }

    return this.dictionaryValue;

  }

  getDictionaryConfiguration(){

    let result = { 
      nodetype: 'class', 
      configuration: { 
        type: 'KeyValue', 
        properties: [
             { name: "Key", nodetype: "input", configuration: {} },
             { name: "Value", nodetype: this.configuration.nodetype, configuration: this.configuration.configuration },
        ],
        configuration : {}
      }
    };

    return result;
  }

  //class functions

  propertiesValue;

  get properties(){

    if(!this.propertiesValue || this.propertiesValue.type !== this.configuration.type){

      var properties;

      if(this.configuration.properties)
      {       
        properties = this.configuration.properties
      }
      else 
      {
        let type = this.objectMetadataService.getType(this.configuration.type);

        properties = type.properties;
      }

      this.propertiesValue = {
        type : this.configuration.type, 
        properties : properties
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

    var data = this.data || {};
    data[name] = value;
    this.setData(data);
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
