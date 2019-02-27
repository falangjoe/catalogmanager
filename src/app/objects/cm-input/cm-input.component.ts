import { Component, Input} from '@angular/core';
import { FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors } from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider, FormHelperSetDisabledState, FormHelperValidate} from '../../helpers/form.helpers';

@Component({
  selector: 'cm-input',
  templateUrl: './cm-input.component.html',
  styleUrls: ['./cm-input.component.css'],
  providers : [
    DefaultControlAccessorProvider(() => CmInputComponent),
    DefaultControlValidatorProvider(() => CmInputComponent),
  ]
})
export class CmInputComponent implements ControlValueAccessor, Validator {

  private controlValue : FormControl;

  constructor() { 

  }

  @Input()
  name : string;

  @Input()
  configuration : any = {};

  get control() {
    if(!this.controlValue){

      this.controlValue = new FormControl();
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


