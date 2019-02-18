import {Provider,  forwardRef, ForwardRefFn  } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';

export function DefaultControlAccessorProvider(forwardRefFn: ForwardRefFn) : Provider{

    return  {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(forwardRefFn),
        multi: true
      };
}



export function DefaultControlValidatorProvider(forwardRefFn: ForwardRefFn) : Provider{

    return  {
        provide:  NG_VALIDATORS,
        useExisting: forwardRef(forwardRefFn),
        multi: true
      };
}


export class FormComponentHelper implements ControlValueAccessor, Validator{


    constructor(private abstractControl: AbstractControl) {

        this._control = abstractControl;

    }

    public registerOnValidatorChange?(fn: () => void): void {
      
    }

    public validate(control: AbstractControl): ValidationErrors | null{

        return this._control.invalid ? {err : "invalid"} : null;
    }

    private _control : AbstractControl;

    public writeValue(obj: any): void {
        if(obj){
          this._control.setValue(obj, {emitEvent : false});
        }
    
      }
    
    public registerOnChange(fn: any): void {
        this._control.valueChanges.subscribe(fn);
    }
    
    public registerOnTouched(fn: any): void {
    
    }
    
    public setDisabledState?(isDisabled: boolean): void {
        if(isDisabled && this._control.enabled){
          this._control.disable({emitEvent : false});
        }else if(!isDisabled && this._control.disable){
          this._control.enable({emitEvent : false});
        }
    }

    // public validate(c : AbstractControl) {
    //     // this.control.get('environment').markAsTouched({ onlySelf: true });
    //     // this.control.get('catalog').markAsTouched({ onlySelf: true });  
    //     return this._control.invalid ? {err : "Form Group Invalid"} : null;
    // }

    public get control() {
        return this._control;
    }

  



}