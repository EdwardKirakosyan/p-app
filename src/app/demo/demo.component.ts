import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  styleUrl: './demo.component.scss',
  template: `
    <h1>demio</h1> 
    <br>
    <br>
    <br>
    <br>
    <a [routerLink]="['']">app</a>
  `
})
export class DemoComponent {

}
