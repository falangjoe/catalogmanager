import { Component, Input} from '@angular/core';
import { FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors } from '@angular/forms';
import {FormComponentHelper} from '../../helpers/form-component-helper';

@Component({
  selector: 'cm-input',
  templateUrl: './cm-input.component.html',
  styleUrls: ['./cm-input.component.css'],
  providers : [
    FormComponentHelper.CreateControlValueAccessorProvider(() => CmInputComponent),
    FormComponentHelper.CreateValidatorProvider(() => CmInputComponent),
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
    FormComponentHelper.SetDisabledState(this.control, isDisabled);
  }

  registerOnValidatorChange?(fn: () => void): void {

    this.control.statusChanges.subscribe(x => {

      if(x === 'VALID' || x === 'INVALID'){
        fn();
      }

    });

    fn();

  }

  validate(control: AbstractControl): ValidationErrors | null {
    let result = FormComponentHelper.Validate(this.control);
    return result;

  }
}


