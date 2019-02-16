import {Component, OnInit,  forwardRef  } from '@angular/core';
import {CatalogService } from '../catalog.service';
import {FormGroup, FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'cm-catalog',
  templateUrl: './cm-catalog.component.html',
  styleUrls: ['./cm-catalog.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmCatalogComponent),
      multi: true
    },  
    { provide: NG_VALIDATORS, 
      useExisting: forwardRef(() => CmCatalogComponent), 
      multi: true 
    }
  ]
})
export class CmCatalogComponent implements OnInit , ControlValueAccessor {

  writeValue(obj: any): void {
    if(obj){
      this.control.setValue(obj, {emitEvent : false});
    }

  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {
    if(isDisabled && this.control.enabled){
      this.control.disable({emitEvent : false});
    }else if(!isDisabled && this.control.disable){
      this.control.enable({emitEvent : false});
    }
  }

  constructor(catalogService : CatalogService) { 

    this.catalogService = catalogService;
  }

  private catalogService;

  ngOnInit() {

    this.catalogService.getEnvironments().subscribe(x => {
      this.environments = x;
    });

    this.control.get('environment').valueChanges.subscribe(x => {
      this.control.patchValue({catalog : undefined}, {emitEvent: false});
      this.setCatalogs(x);

    });

    // this.control.get('environment').markAsTouched({ onlySelf: true });
    // this.control.get('catalog').markAsTouched({ onlySelf: true });  

  }

  private catalogs = [];
  private environments = [];

  private setCatalogs(environment){
    if(environment){
      this.catalogService.getCatalogs(environment).subscribe(x => {
        this.catalogs = x;
      });

    }
    else{
      this.catalogs = [];
    }
  }

  public control = new FormGroup({
    environment: new FormControl('',Validators.required),
    catalog: new FormControl('',Validators.required),
  });

  validate(c: FormControl) {
    return this.control.invalid ? {catalog : {}}: null;
  }


  
  
}
