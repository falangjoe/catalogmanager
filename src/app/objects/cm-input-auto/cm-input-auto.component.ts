import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {InputmetadataService } from '../../input-metadata.service';
import { map, startWith } from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'cm-input-auto',
  templateUrl: './cm-input-auto.component.html',
  styleUrls: ['./cm-input-auto.component.css']
})
export class CmInputAutoComponent implements OnInit {

  constructor(private inputMetadataService: InputmetadataService) { 

  }
  
  ngOnInit() {
    this.validatorControl.valueChanges.subscribe(
      {
        next: x => {
          this.dataChange.emit(x); 
        }
      }
    );
  }


  //values

  values : any[];
  filteredValues : Observable<any[]>;

  //name

  @Input()
  name : string;

  //data

  @Input()
  set data(value : string){

    if(this.validatorControl.value !== value){
      this.validatorControl.setValue(value, {emitEvent : false});
    }
    
  }

 

  @Output() 
  dataChange : EventEmitter<string> = new EventEmitter<string>();

  //Configuration

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

      this.filteredValues = this.validatorControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );  
    }

  }


  get configuration(){
    return this.configurationValue;
  }


  validatorControl = new FormControl('', [
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

}



