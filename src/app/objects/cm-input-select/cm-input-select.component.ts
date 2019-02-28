
import { Component, Input } from '@angular/core';
import {FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors, Validators} from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,FormHelperSetDisabledState, FormHelperValidate} from '../../helpers/form.helpers';

@Component({
  selector: 'cm-input-select',
  templateUrl: './cm-input-select.component.html',
  styleUrls: ['./cm-input-select.component.css'],
  providers : [
    DefaultControlAccessorProvider(() => CmInputSelectComponent),
    DefaultControlValidatorProvider(() => CmInputSelectComponent),
  ]
})
export class CmInputSelectComponent implements ControlValueAccessor, Validator   {
  

  constructor(){

  }

  @Input()
  name : string;

  configurationValue;

  @Input()
  set configuration(value){    
    this.configurationValue = value;
  }

  get configuration(){
    return this.configurationValue;
  }

  private controlValue;

  get control() : FormControl {
    if(!this.controlValue){

      let validators = this.configuration.required ? [Validators.required] : [];

      this.controlValue = new FormControl(undefined, validators);
    }
    return this.controlValue;
  }

  writeValue(obj: any): void {
    this.control.setValue(obj, {emitEvent : false});
  }
  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
    fn(this.control.value);

  }
  registerOnTouched(fn: any): void {
   
  }
  setDisabledState?(isDisabled: boolean): void {
    FormHelperSetDisabledState(this.control, isDisabled);
  }

  registerOnValidatorChange?(fn: () => void): void {
   
  }

  validate(control: AbstractControl): ValidationErrors | null {


    let result = FormHelperValidate(this.control);


    return result;
  }
}
