import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [JsonPipe, ReactiveFormsModule],
  selector: 'app-basic-page',
  templateUrl: './basic-page.html',
})
export class BasicPage {
  myForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  });
}
