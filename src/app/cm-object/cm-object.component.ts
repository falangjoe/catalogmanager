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

  @Input()
  configuration;


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
    this.dataChange.emit(this.dataValue);
 
  }

  //interface functions

  get interfaceSelection(){
    if(this.data){
      return this.data.type;
    }
  }



  interfaceConfiguration;

  interfaceSelectionChange(event){

    var type = event.value;
    this.interfaceConfiguration = { type : type};

  }

  interfaceDataChange(value){

    if(value){
      console.log("interface selection:" + this.interfaceConfiguration.type);
      value.type = this.interfaceConfiguration.type;
      this.data = value;
    }
  }



  //object functions

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

  get properties(){
    if(this.nodetype == 'class'){
      var result = [];
      var configuration = this.configuration;

      if(configuration){
        var type = this.promotionMetadataService.getType(this.configuration.type);
        result = type.properties;
      }
      return result;
    }
  }

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
