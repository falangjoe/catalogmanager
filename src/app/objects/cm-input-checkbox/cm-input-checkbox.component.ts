import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors} from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,FormComponentHelper} from '../../helpers/form.helpers';

@Component({
  selector: 'cm-input-checkbox',
  templateUrl: './cm-input-checkbox.component.html',
  styleUrls: ['./cm-input-checkbox.component.css'],
  providers : [
    DefaultControlAccessorProvider(() => CmInputCheckboxComponent),
    DefaultControlValidatorProvider(() => CmInputCheckboxComponent),
  ]
})
export class CmInputCheckboxComponent implements OnInit, ControlValueAccessor, Validator  {

  constructor() { 
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


  control = new FormControl('');

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
