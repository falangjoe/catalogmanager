import {Provider,  forwardRef, ForwardRefFn  } from '@angular/core';
import {NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';


export class FormComponentHelper {

  public static Validate(control: AbstractControl): ValidationErrors | null {

    return control.invalid ? {err : "invalid"} : null;
  }

  public static SetDisabledState(control : AbstractControl, isDisabled: boolean): void {
    if(isDisabled && control.enabled){
      control.disable({emitEvent : false});
    }
    else if(!isDisabled && control.disable){
      control.enable({emitEvent : false});
    }
  }

  public static CreateValidatorProvider(forwardRefFn: ForwardRefFn) : Provider{

    return  {
        provide:  NG_VALIDATORS,
        useExisting: forwardRef(forwardRefFn),
        multi: true
      };
  }

  public static CreateControlValueAccessorProvider(forwardRefFn: ForwardRefFn) : Provider{

    return  {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(forwardRefFn),
        multi: true
      };
    }

}


