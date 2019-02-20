import { Component, Input} from '@angular/core';
import { FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors } from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,FormComponentHelper} from '../../helpers/form.helpers';

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

  private formComponentHelper : FormComponentHelper;
  private control : FormControl = new FormControl('');

  constructor() { 
    
    this.formComponentHelper = new FormComponentHelper(this.control);
  }

  @Input()
  name : string;

  @Input()
  configuration : any = {};

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


