import {Component, OnInit} from '@angular/core';
import {CatalogService } from '../catalog.service';
import {FormGroup, FormControl, Validators, AbstractControl, ControlValueAccessor, Validator, ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormComponentHelper} from '../../helpers/form-component-helper';

@Component({
  selector: 'cm-catalog',
  templateUrl: './cm-catalog.component.html',
  styleUrls: ['./cm-catalog.component.css'],
  providers : [
    FormComponentHelper.CreateControlValueAccessorProvider(() => CmCatalogComponent),
    FormComponentHelper.CreateValidatorProvider(() => CmCatalogComponent),
  ]
})
export class CmCatalogComponent implements OnInit, ControlValueAccessor, Validator  {

  constructor(catalogService : CatalogService) { 

    this.control = new FormGroup({
      Environment: new FormControl(undefined,Validators.required),
      CatalogId: new FormControl(undefined,Validators.required),
    },[this.getCatalogValidator()]);
    
    this.catalogService = catalogService;

    this.environment = this.control.get('Environment');
    this.catalog = this.control.get('CatalogId');
  }

  private catalogService : CatalogService;


  private environment : AbstractControl;
  private catalog : AbstractControl;

  private catalogs : Array<string> = [];
  private environments : Array<string> = [];

  private control : FormGroup;

  ngOnInit() {

    this.setEnvironments();
    this.subscribeEnvironmentValueChanges();
  }

  private setEnvironments() : void{
    this.catalogService.getEnvironments().subscribe(x => {
      this.environments = x;
    });
  }

  private subscribeEnvironmentValueChanges() : void{

    this.environment.valueChanges.subscribe(x => {
      this.setCatalogs(x);

    });
  }

  private setCatalogs(environment) : void{
    if(environment){
      this.catalogService.getCatalogs(environment).subscribe(x => {
        this.catalogs = x;
      });

    }
    else{
      this.catalogs = [];
    }
  }


  private getCatalogValidator() : ValidatorFn {

    let self = this;

    return (control : AbstractControl) : {[key: string]: any} | null => {
      
      let isValid : boolean = true;
  
      let value = control.value;

      if(value && value.Environment && value.CatalogId){

        isValid = self.catalogs.includes(value.CatalogId);

      }

      return !isValid ? {'invalidCatalog': value.CatalogId} : null;
    };
  }


  writeValue(obj: any): void {

    if(obj){

      this.control.setValue(obj,{emitEvent : false});
      this.setCatalogs(this.environment.value);
    
    }
 

  }

  registerOnChange(fn: any): void {

    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState?(isDisabled: boolean): void {

    FormComponentHelper.SetDisabledState(this.control,isDisabled);
  }


  registerOnValidatorChange?(fn: () => void): void {
 
  }

  validate(control: AbstractControl): ValidationErrors | null {

    return FormComponentHelper.Validate(this.control);
  }

}
