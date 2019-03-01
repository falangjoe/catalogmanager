import { Component, Input } from '@angular/core';
import {FormControl, Validators, ValidatorFn, AbstractControl, ControlValueAccessor, Validator, ValidationErrors} from '@angular/forms';
import {InputMetadataService } from '../input-metadata.service';
import { map, startWith } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormComponentHelper} from '../../helpers/form-component-helper';


@Component({
  selector: 'cm-input-auto',
  templateUrl: './cm-input-auto.component.html',
  styleUrls: ['./cm-input-auto.component.css'],
  providers : [
    FormComponentHelper.CreateControlValueAccessorProvider(() => CmInputAutoComponent),
    FormComponentHelper.CreateValidatorProvider(() => CmInputAutoComponent),
  ]
})
export class CmInputAutoComponent implements ControlValueAccessor, Validator  {


  values : any[];
  filteredValues : Observable<any[]>;

  constructor(private inputMetadataService: InputMetadataService) { 
   

  }

  @Input()
  name : string;

  configurationValue;

  @Input()
  set configuration(value){
      
    this.configurationValue = value;

    if(this.configuration && this.configuration.selector){
      this.inputMetadataService.inputvalues(this.configuration.selector).subscribe(
        {
          next: x => {
            this.values = x;
          }
        }
      );

      this.filteredValues = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );  
    }

  }


  get configuration(){
    return this.configurationValue;
  }

  private controlValue;

  get control() : FormControl {
    if(!this.controlValue){

      let validators = this.configuration.required ? [Validators.required,this.selectorValidator()] : [this.selectorValidator()];

      this.controlValue = new FormControl(undefined, validators);
    }
    return this.controlValue;
  }

  

  

  private _filter(value: string): string[] {

    const filterValue = value.toLowerCase();

    return this.values.filter(x => x.name.toLowerCase().includes(filterValue));
  }

  private selectorValidator() : ValidatorFn {

    return (control : AbstractControl) : {[key: string]: any} | null => {

  
      if(!this.configuration || !this.configuration.validate || !control.value){
        return null;
      }

      let isValid : boolean = false;

      if(this.values){
 
        let ids = this.values.map(x => x.id);
        isValid = ids.includes(control.value);
      }


      return !isValid ? {'invalidvalue': {value: control.value}} : null;
    };
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



