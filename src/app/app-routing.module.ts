import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from "./demo/demo.component";
import { NewComponent } from "./new/new.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: "full" },
  { path: 'app', component: AppComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'new', component: NewComponent },
  { path: '**', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
