import { Component, Input } from '@angular/core';
import {FormControl, Validators, ValidatorFn, AbstractControl, ControlValueAccessor, Validator, ValidationErrors} from '@angular/forms';
import {InputMetadataService } from '../input-metadata.service';
import { map, startWith } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,FormComponentHelper} from '../../helpers/form.helpers';


@Component({
  selector: 'cm-input-auto',
  templateUrl: './cm-input-auto.component.html',
  styleUrls: ['./cm-input-auto.component.css'],
  providers : [
    DefaultControlAccessorProvider(() => CmInputAutoComponent),
    DefaultControlValidatorProvider(() => CmInputAutoComponent),
  ]
})
export class CmInputAutoComponent implements ControlValueAccessor, Validator  {

  private formComponentHelper : FormComponentHelper;
  values : any[];
  filteredValues : Observable<any[]>;

  constructor(private inputMetadataService: InputMetadataService) { 
   
    this.formComponentHelper = new FormComponentHelper(this.control);
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


  private control : FormControl = new FormControl(undefined, [
    Validators.required,
    this.valueValidator()
  ]);

  

  private _filter(value: string): string[] {

    const filterValue = value.toLowerCase();

    return this.values.filter(x => x.name.toLowerCase().includes(filterValue));
  }

  private valueValidator() : ValidatorFn {

    return (control : AbstractControl) : {[key: string]: any} | null => {

  
      if(!this.configuration || !this.configuration.validate){
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



