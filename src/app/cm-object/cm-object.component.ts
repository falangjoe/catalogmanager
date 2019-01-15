import { Component, Input, Output, OnInit,  EventEmitter } from '@angular/core';
import { CmInputComponent } from '../cm-input/cm-input.component';
import { PromotionMetadataService } from '../promotion-metadata.service';
import { MatSelect, MatFormFieldModule } from '@angular/material';

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
  set configuration(value){

    this.configurationValue = value;

    if(this.nodetype == 'class'){
      this.classConfigurationChange();
    }
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



  dataValue;

  @Output() dataChange = new EventEmitter();

  @Input()
  get data(){
    return this.dataValue;
  }

  set data(val){
  
  
    this.dataValue = val;
    this.dataChange.emit(this.dataValue); //only need to call when change from inside?
 
  }

  //interface functions

  get interfaceSelection(){

    if(this.interfaceConfiguration){
      return this.interfaceConfiguration.type;
    }
  }

  interfaceConfigurationValue;

  get interfaceConfiguration(){

    if(!this.interfaceConfigurationValue){
      
      if(this.data){

        this.interfaceConfigurationValue = { type : this.data.Type};
      }
    }

    return this.interfaceConfigurationValue;
  }

  set interfaceConfiguration(value){

      this.interfaceConfigurationValue = value;
  }

  interfaceSelectionChange(event){

    var type = event.value;
    this.interfaceConfiguration = { type : type};

  }

  interfaceDataChange(value){

    if(value){
      console.log("interface selection:" + this.interfaceConfiguration.type);
      value.Type = this.interfaceConfiguration.type;
      this.data = value;
    }
  }



  //class functions

  propertyList;

  get properties(){

    if(!this.propertyList){

      this.setPropertyList();
    }

    return this.propertyList;
  };

  classConfigurationChange(){

    if(this.propertyList){

      this.setPropertyList();
    }
  }

  setPropertyList(){

    var type = this.promotionMetadataService.getType(this.configuration.type);  
    this.propertyList = type.properties;
  }


  getPropertyData(name){
  
    if(this.data){
      var result =  this.data[name];
      return result;
    }
  }

  setPropertyData(name,value){

    if(value){
      var dataValue = this.dataValue || {};
      dataValue[name] = value;
      this.data = dataValue;
    } 
  }

  // get properties(){
  //   console.log("get properties called");
  //   if(this.nodetype == 'class'){
  //     var result = [];
  //     var configuration = this.configuration;

  //     if(configuration){
  //       var type = this.promotionMetadataService.getType(this.configuration.type);
  //       result = type.properties;
  //     }
  //     return result;
  //   }
  // }

  //list functions

  itemsValue;

  get items(){
    
    if(!this.itemsValue){

      this.itemsValue = (this.data || []).map(x => {
          return  {
            nodetype:this.configuration.nodetype,
            configuration: this.configuration.configuration,
            data: x
          };
      });
    }

    return this.itemsValue;
  }

  setItemData(index,value){
  

    var data = this.data || [];
    data[index] = value;
    this.data = data; 
  }

  addItem(){
    
    var data = this.data || [];
    data.push(undefined);
    this.data = data;
  
    this.items.push(
      {
        nodetype: this.configuration.nodetype,
        configuration: this.configuration.configuration,
        data: undefined
      }
    );

  }

  removeItem(){ 

    var items = this.items;
    items.pop();
    this.itemsValue = items;

    var data = this.data;
    data.pop();
    this.data = data;
  }






}
