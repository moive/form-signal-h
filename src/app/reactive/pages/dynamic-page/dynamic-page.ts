import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [JsonPipe],
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.html',
})
export class DynamicPage {}
