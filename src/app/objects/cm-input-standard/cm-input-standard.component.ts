import { Component, Input} from '@angular/core';
import {FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors} from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,FormComponentHelper} from '../../helpers/form.helpers';

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
    this.formComponentHelper = new FormComponentHelper(this.control);
  }

  private formComponentHelper : FormComponentHelper;

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

  control = new FormControl();

  writeValue(obj: any): void {
    this.control.setValue(obj, {emitEvent : false});
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
