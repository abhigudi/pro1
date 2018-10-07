import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: '', component: Page2Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [Page2Component]
})
export class Page2Module { }
