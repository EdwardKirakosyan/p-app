import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'p-app';
  inputVal: string = ''

  constructor() {
    console.log('app component constractor called')
  }

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value
  }
}
