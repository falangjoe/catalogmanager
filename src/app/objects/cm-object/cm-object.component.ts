import { Component, Input, Output, OnInit,  EventEmitter } from '@angular/core';
import { ObjectMetadataService } from '../object-metadata.service';
import { FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors, FormGroup, CheckboxControlValueAccessor, FormArray, Validators  } from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,FormComponentHelper} from '../../helpers/form.helpers';


@Component({
  selector: 'cm-object',
  templateUrl: './cm-object.component.html',
  styleUrls: ['./cm-object.component.css'],
  providers : [
    DefaultControlAccessorProvider(() => CmObjectComponent),
    DefaultControlValidatorProvider(() => CmObjectComponent),
  ]
})
export class CmObjectComponent implements OnInit, ControlValueAccessor, Validator {
  
  private formComponentHelper : FormComponentHelper;

  constructor(private objectMetadataService: ObjectMetadataService) { 
    this.formComponentHelper = new FormComponentHelper(this.control);
  }

  @Input()
  parentnodetype;

  @Input()
  nodetype;

  @Input()
  name;


  ngOnInit() {
  }

 //configuration

  private configurationValue;

  @Input()
  set configuration(value){
    this.configurationValue = value;
  };

  get configuration(){
    return this.configurationValue;
  }




  private controlContainerValue;

  private get control(){

    let container = this.controlContainer;

    return container.control;
  }


  private get controlContainer(){

    if(!this.controlContainerValue || this.controlContainerValue.configuration != this.configuration){

      let objectControl = this.createControl();

      this.controlContainerValue =  {
        control : objectControl,
        configuration : this.configuration,
        helper : new FormComponentHelper(objectControl)
      };

      if(objectControl){

        objectControl.valueChanges.subscribe(this.createPropateChange());
      }
    
    }

    return this.controlContainerValue;
  }


  private createControl(){

    let control;

    if(this.nodetype == 'input'){

      control = new FormControl();
    }
    else if(this.nodetype == 'class')
    {
      let group = new FormGroup({});

      let properties = this.getClassProperties();

      properties.forEach(property => {

        let validators = property.required ? [Validators.required] : [];

        group.addControl(property.name,new FormControl(undefined,validators));
      
      });

      control = group;
    }
    else if (this.nodetype == 'list')
    {
      let controls = [];

      for(var i = 0; i < this.listLength; i++) {
        controls.push(new FormControl() as AbstractControl);
      }

      let array = new FormArray(controls);

      control = array;
    }
    else if(this.nodetype == 'interface')
    {
      let group = new FormGroup({
        Type : new FormControl(),
        Object : new FormControl()
      });

      control = group;
    }
    else if (this.nodetype == 'dictionary')
    {
      control = new FormControl();

    }


    return control;
  }



  private registeredPropagateChange = (_: any) => {};


  private createPropateChange() : (_: any) => void {

    let self = this;

    return ( x : any) => {

      if(self.registeredPropagateChange){

        let value = undefined;

        if(this.nodetype == 'interface'){
      
          if(x.Object){
            value = x.Object;
            value[this.interfaceTypePropertyName] = x.Type;
          }          
        }
        else if(this.nodetype == 'dictionary'){


          value = {};

          x.forEach(keyValuePair => {
            if(keyValuePair) {
              value[keyValuePair.Key] = keyValuePair.Value;
            }
          });

        }
        else{

          value = x;
        }

        self.registeredPropagateChange(value);
      }
    };

  }

  //class

  propertiesContainer;

  get properties(){

    if(!this.propertiesContainer || this.propertiesContainer.configuration !== this.configuration){

      this.propertiesContainer = {

        properties : this.getClassProperties(),
        configuration : this.configuration
      };
    }

    return this.propertiesContainer.properties;
  };

  getPropertyControl(name){
    return this.control.get(name);
  }


  private getClassProperties(){

    let properties;

    if(this.configuration.properties)
    {       
      properties = this.configuration.properties
    }
    else 
    {
      let type = this.objectMetadataService.getType(this.configuration.type);

      properties = type.properties;
    }

    return properties;

  };

  //list functions
  get items(){
    return this.control.controls;
  }

  deleteItem(index){
    this.listLength -= 1;
    this.control.removeAt(index);
  }

  addItem(){
    this.listLength += 1;
    this.control.push(new FormControl());
  }

  private listLength = 0;


 // //interface functions

  get interfaceTypeControl(){

    let type = this.control.get('Type');

    return type;
  }

  private interfaceConfigurationContainer;

  get interfaceTypeOptions(){

    if(!this.interfaceConfigurationContainer || this.interfaceConfigurationContainer.configuration != this.configuration)
    {
        let options = this.configuration.types.map(x => {
          if(x instanceof Object)
          {
            return {
              value : x.type,
              display : x.display
            };

          }
          else {
            return {
              value : x,
              display : x
            };
          }
        });

        this.interfaceConfigurationContainer = {
          options: options,
          configuration: this.configuration
        };
    }

    return this.interfaceConfigurationContainer.options;
  }


  get interfaceObjectConfiguration(){

    let type = this.interfaceTypeControl;

    if(type.value){
      return {type : type.value};
    }   
  }

  get interfaceObjectControl(){

    let object = this.control.get('Object');

    return object;
  }

  get interfaceTypePropertyName(){

    return this.configuration.property || "Type";
  }


  //dictionary


  private dictionaryConfigurationContainer;

  getDictionaryConfiguration(){

    if(!this.dictionaryConfigurationContainer || this.dictionaryConfigurationContainer.configuration != this.configuration)
    {
      this.dictionaryConfigurationContainer = {
        configuration : this.configuration,
        dictionaryConfiguration : { 
          nodetype: 'class', 
          configuration: { 
            type: 'KeyValue', 
            properties: [
                 { name: "Key", nodetype: "input", configuration: {} },
                 { name: "Value", nodetype: this.configuration.nodetype, configuration: this.configuration.configuration },
            ],
            configuration : {}
          }
        }
      };  
    }

    return this.dictionaryConfigurationContainer.dictionaryConfiguration;
  }

  


  writeValue(obj: any): void {

    if(this.nodetype == "list")
    {
      if(obj){
     
        this.controlContainerValue = undefined;
        this.listLength = obj.length;
        // this.setFormArrayLength((obj || []).length);
        this.control.setValue(obj, {emitEvent : false});
      }
    }
    else if(this.nodetype == 'interface') {

      if(obj){

        this.controlContainerValue = undefined;

        var keys = Object.keys(obj);

        var value = {};

        keys.forEach(key => {
          if(key !== this.interfaceTypePropertyName){
            value[key] = obj[key];
          }
          value
        });

        this.control.setValue({Type : obj[this.interfaceTypePropertyName], Object : value},{emitEvent : false});
      }

    }
    else if(this.nodetype == 'dictionary'){

      if(obj){

        var keys = Object.keys(obj);

        let values = keys.map(x => {
          return {Key : x, Value : obj[x]};
        });

        this.control.setValue(values, {emitEvent : false});
      }

    }
    else{
      if(obj){
        this.control.setValue(obj, {emitEvent : false});
      }
    }
   
  }
  registerOnChange(fn: any): void {
    this.registeredPropagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.controlContainer.helper.registerOnTouched(fn);
  }
  setDisabledState?(isDisabled: boolean): void {

    if(isDisabled && this.control.enabled){
      this.control.disable({emitEvent : false});
    }else if(!isDisabled && this.control.disable){
      this.control.enable({emitEvent : false});
    }
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {

    return this.controlContainer.helper.validate(control);
  }

  




}
