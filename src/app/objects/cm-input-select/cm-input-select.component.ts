
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors, Validators} from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,FormComponentHelper} from '../../helpers/form.helpers';

@Component({
  selector: 'cm-input-select',
  templateUrl: './cm-input-select.component.html',
  styleUrls: ['./cm-input-select.component.css'],
  providers : [
    DefaultControlAccessorProvider(() => CmInputSelectComponent),
    DefaultControlValidatorProvider(() => CmInputSelectComponent),
  ]
})
export class CmInputSelectComponent implements OnInit, ControlValueAccessor, Validator   {

  constructor(){
    this.formComponentHelper = new FormComponentHelper(this.control);
  }

  private formComponentHelper : FormComponentHelper;

  ngOnInit() {
    // this.control.valueChanges.subscribe(
    //   {
    //     next: x => {
    //       this.dataChange.emit(x); 
    //     }
    //   }
    // );
  }


  //values

  //name

  @Input()
  name : string;

  //data

  // @Input()
  // set data(value : string){

  //   if(this.control.value !== value){
  //     this.control.setValue(value, {emitEvent : false});
  //   }
    
  // }

 

  // @Output() 
  // dataChange : EventEmitter<string> = new EventEmitter<string>();

  //Configuration

  configurationValue;

  @Input()
  set configuration(value){
      
    this.configurationValue = value;
  }


  get configuration(){
    return this.configurationValue;
  }


  control = new FormControl('', Validators.required);

  writeValue(obj: any): void {
    this.formComponentHelper.writeValue(obj);
  }
  registerOnChange(fn: any): void {
    this.formComponentHelper.registerOnChange(fn);
  }
  registerOnTouched(fn: any): void {
    this.formComponentHelper.registerOnTouched(fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    this.formComponentHelper.setDisabledState(isDisabled);
  }


  registerOnValidatorChange?(fn: () => void): void {
    this.formComponentHelper.registerOnValidatorChange(fn);
  }

  validate(control: AbstractControl): ValidationErrors | null {

    return this.formComponentHelper.validate(control);
  }
}
