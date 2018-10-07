import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Child2Component } from './page1-child2.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: '', component: Page1Child2Component }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [Page1Child2Component]
})
export class Page1Child2Module { }
