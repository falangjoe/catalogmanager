import { Component, Input} from '@angular/core';
import {FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors, Validators} from '@angular/forms';
import {FormComponentHelper} from '../../helpers/form-component-helper';

@Component({
  selector: 'cm-input-standard',
  templateUrl: './cm-input-standard.component.html',
  styleUrls: ['./cm-input-standard.component.css'],
  providers : [
    FormComponentHelper.CreateControlValueAccessorProvider(() => CmInputStandardComponent),
    FormComponentHelper.CreateValidatorProvider(() => CmInputStandardComponent),
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
    fn(this.control.value);
  }
  registerOnTouched(fn: any): void {
   
  }
  setDisabledState?(isDisabled: boolean): void {
    FormComponentHelper.SetDisabledState(this.control, isDisabled);
  }

  registerOnValidatorChange?(fn: () => void): void {
   
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return FormComponentHelper.Validate(this.control);
  }
}
