import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  title: string = 'Demo comp'
  @Input() message: string;

  constructor() {
    console.log('demo constractor called')
    console.log(this.title)
    console.log(this.message)
  }
}
