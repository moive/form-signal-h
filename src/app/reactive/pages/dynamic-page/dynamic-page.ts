import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { FormUtil } from '@/app/utils';

@Component({
  imports: [JsonPipe, ReactiveFormsModule],
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.html',
})
export class DynamicPage {
  private fb = inject(FormBuilder);
  formUtil = FormUtil;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Metal Gear', [Validators.required, Validators.minLength(2)]],
        ['Death Stranding', [Validators.required, Validators.minLength(2)]],
      ],
      [Validators.required, FormUtil.minArrayLength(3)],
    ),
  });

  newFavoriteGame = new FormControl('', [Validators.required, Validators.minLength(2)]);
  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  onAddFavoriteGame($event: Event) {
    $event.preventDefault();
    if (this.newFavoriteGame.invalid) return;
    const newGame = this.newFavoriteGame.value;

    this.favoriteGames.push(
      this.fb.control(newGame, [Validators.required, Validators.minLength(2)]),
    );
    this.newFavoriteGame.reset();
  }

  onDeleteFavoriteGame(index: number) {
    this.favoriteGames.removeAt(index);
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    // this.myForm.reset();
  }
}
