export function ValidateDuplicateName(name: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log('value');
      let v: string = control.value;
      if (v === name) {
        return { nameAlreadyExist: true };
      }
      return null;
    };
  }
  