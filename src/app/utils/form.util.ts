import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtil {
  static getTextErrorMessage(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `This field must have at least ${errors['minlength'].requiredLength} characters`;
        case 'min':
          return `The minimum value allowed is ${errors['min'].min}`;
        default:
          return 'Invalid field';
      }
    }
    return null;
  }
  static isValidField(form: FormGroup, field: string): boolean | null {
    return !!form.controls[field].errors && form.controls[field].touched;
  }

  static getFieldError(form: FormGroup, field: string): string | null {
    if (!form.controls[field]) return null;
    const errors = form.controls[field].errors || {};
    return FormUtil.getTextErrorMessage(errors);
  }

  static isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return !!formArray.controls[index].errors && formArray.controls[index].touched;
  }

  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (formArray.controls.length === 0) return null;
    const errors = formArray.controls[index].errors || {};
    return FormUtil.getTextErrorMessage(errors);
  }
}
