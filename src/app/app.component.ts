import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <h1>HEADER</h1>
    <ul>
      <li><a [routerLink]="['demo']">demo</a></li>
      <li><a [routerLink]="['new']">new</a></li>
    </ul>>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {

}


