import { Component, Input} from '@angular/core';
import {FormControl, AbstractControl, ControlValueAccessor, Validator, ValidationErrors,Validators} from '@angular/forms';
import {FormComponentHelper} from '../../helpers/form-component-helper';

@Component({
  selector: 'cm-input-checkbox',
  templateUrl: './cm-input-checkbox.component.html',
  styleUrls: ['./cm-input-checkbox.component.css'],
  providers : [
    FormComponentHelper.CreateControlValueAccessorProvider(() => CmInputCheckboxComponent),
    FormComponentHelper.CreateValidatorProvider(() => CmInputCheckboxComponent),
  ]
})
export class CmInputCheckboxComponent implements ControlValueAccessor, Validator  {


  constructor() { 
  
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

    if(this.control.invalid){
      fn();
    }

  }

  validate(control: AbstractControl): ValidationErrors | null {

    let result = FormComponentHelper.Validate(this.control);

    return result;
  }
}
