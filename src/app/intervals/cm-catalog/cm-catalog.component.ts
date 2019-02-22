import {Component, OnInit} from '@angular/core';
import {CatalogService } from '../catalog.service';
import {FormGroup, FormControl, Validators, AbstractControl, ControlValueAccessor, Validator, ValidationErrors} from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,FormComponentHelper} from '../../helpers/form.helpers';

@Component({
  selector: 'cm-catalog',
  templateUrl: './cm-catalog.component.html',
  styleUrls: ['./cm-catalog.component.css'],
  providers : [
    DefaultControlAccessorProvider(() => CmCatalogComponent),
    DefaultControlValidatorProvider(() => CmCatalogComponent),
  ]
})
export class CmCatalogComponent implements OnInit, ControlValueAccessor, Validator  {

  constructor(catalogService : CatalogService) { 

    this.control = new FormGroup({
      Environment: new FormControl('',Validators.required),
      CatalogId: new FormControl('',Validators.required),
    });
    
    this.formComponentHelper = new FormComponentHelper(this.control);

    this.catalogService = catalogService;

    this.environment = this.control.get('Environment');
    this.catalog = this.control.get('CatalogId');
  }

  private catalogService : CatalogService;

  private formComponentHelper : FormComponentHelper;

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
      this.catalog.setValue(undefined,{emitEvent : false});
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
