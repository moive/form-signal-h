import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [JsonPipe],
  selector: 'app-basic-page',
  templateUrl: './basic-page.html',
})
export class BasicPage {}
