import { Component, Input} from '@angular/core';
import {FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors, Validators} from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,FormHelperSetDisabledState, FormHelperValidate} from '../../helpers/form.helpers';

@Component({
  selector: 'cm-input-standard',
  templateUrl: './cm-input-standard.component.html',
  styleUrls: ['./cm-input-standard.component.css'],
  providers : [
    DefaultControlAccessorProvider(() => CmInputStandardComponent),
    DefaultControlValidatorProvider(() => CmInputStandardComponent),
  ]
})
export class CmInputStandardComponent implements ControlValueAccessor, Validator  {

  constructor(){
  }

  private controlValue : FormControl;

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

  get control() {
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
  }
  registerOnTouched(fn: any): void {
   
  }
  setDisabledState?(isDisabled: boolean): void {
    FormHelperSetDisabledState(this.control, isDisabled);
  }

  registerOnValidatorChange?(fn: () => void): void {
   
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return FormHelperValidate(this.control);
  }
}
