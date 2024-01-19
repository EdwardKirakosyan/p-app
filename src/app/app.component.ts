import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
<form [formGroup]="form">
  <input type="text" formControlName="first">
  <input type="text" formControlName="last">
  <input type="email" formControlName="mail">
</form>
  `
})
export class AppComponent implements OnInit {
  form

  ngOnInit() {
    this.form = new FormGroup({
      first: new FormControl('ss'),
      last: new FormControl('dd'),
      mail: new FormControl('ff')
    })
  }

}

