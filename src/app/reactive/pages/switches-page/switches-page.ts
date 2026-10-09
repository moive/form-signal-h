import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { FormUtil } from '@/app/utils';

@Component({
  imports: [JsonPipe, ReactiveFormsModule],
  selector: 'app-switches-page',
  templateUrl: './switches-page.html',
})
export class SwitchesPage {
  private fb = inject(FormBuilder);

  formUtil = FormUtil;

  myForm: FormGroup = this.fb.group({
    gender: [null, Validators.required],
    wantNotifications: [true],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  onSave() {
    if (this.myForm.invalid) {
      return this.myForm.markAllAsTouched();
    }
    console.log(this.myForm.value);
  }
}
