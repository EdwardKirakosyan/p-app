import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnChanges {
  title: string = 'Demo comp'
  @Input() message: string;

  constructor() {
    console.log('demo constractor called')
    console.log(this.title)
    console.log(this.message)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnCHanges Called!!!!')
    console.log(changes)

  }
}
