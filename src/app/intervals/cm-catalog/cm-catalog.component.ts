import {Component, OnInit} from '@angular/core';
import {CatalogService } from '../catalog.service';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {DefaultControlAccessorProvider,DefaultControlValidatorProvider,DefaultControlValueAccessor} from '../../helpers/form.helpers';

@Component({
  selector: 'cm-catalog',
  templateUrl: './cm-catalog.component.html',
  styleUrls: ['./cm-catalog.component.css'],
  providers : [
    DefaultControlAccessorProvider(() => CmCatalogComponent),
    DefaultControlValidatorProvider(() => CmCatalogComponent),
  ]
})
export class CmCatalogComponent extends DefaultControlValueAccessor implements OnInit  {

  constructor(catalogService : CatalogService) { 

    super(new FormGroup({
      environment: new FormControl('',Validators.required),
      catalog: new FormControl('',Validators.required),
    }));

    this.catalogService = catalogService;

    this.environment = this.control.get('environment');
    this.catalog = this.control.get('catalog');
  }

  private catalogService : CatalogService;

  private environment : AbstractControl;
  private catalog : AbstractControl;

  private catalogs : Array<string> = [];
  private environments : Array<string> = [];

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
      this.catalog.setValue(undefined);
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

}
