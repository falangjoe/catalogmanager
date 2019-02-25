
import { Component, Input } from '@angular/core';
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
export class CmInputSelectComponent implements ControlValueAccessor, Validator   {
  
  private formComponentHelper : FormComponentHelper;

  constructor(){
    this.formComponentHelper = new FormComponentHelper(this.control);
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

  control = new FormControl(undefined, Validators.required);

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
