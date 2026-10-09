import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormUtil {
  static isInvalid(control: AbstractControl | null): boolean {
    return !!control && control.invalid && control.touched;
  }

  static getErrorMessage(
    control: AbstractControl | null,
    options: { fieldName?: string; requiredMessage?: string } = {},
  ): string | null {
    const errors = control?.errors;

    if (!errors) return null;

    if (errors['minArrayLength']) {
      const itemName = options.fieldName ?? 'items';
      return `Add at least ${errors['minArrayLength'].requiredLength} ${itemName}.`;
    }
    if (errors['required']) return options.requiredMessage ?? 'This field is required';
    if (errors['minlength']) {
      const unit = control instanceof FormArray ? (options.fieldName ?? 'items') : 'characters';
      return `This field must have at least ${errors['minlength'].requiredLength} ${unit}`;
    }
    if (errors['min']) return `The minimum value allowed is ${errors['min'].min}`;

    return 'Invalid field';
  }

  static minArrayLength(minimum: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!(control instanceof FormArray)) return null;

      const actualLength = control.length;
      return actualLength === 0 || actualLength >= minimum
        ? null
        : { minArrayLength: { requiredLength: minimum, actualLength } };
    };
  }
}
