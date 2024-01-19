import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  styleUrl: './new.component.scss',
  template: `
    <h1>new</h1> 
    <br>
    <br>
    <br>
    <br>
    <a [routerLink]="['']">app</a>
  `,
})
export class NewComponent {

}
