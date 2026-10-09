import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtil } from '@/app/utils';

@Component({
  imports: [JsonPipe, ReactiveFormsModule],
  selector: 'app-register-page',
  templateUrl: './register-page.html',
})
export class RegisterPage {
  private fb = inject(FormBuilder);
  formUtil = FormUtil;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  onCreate() {
    console.log(this.myForm.value);
    if (this.myForm.invalid) {
      return this.myForm.markAllAsTouched();
    }
    console.log(this.myForm.value);
  }
}
