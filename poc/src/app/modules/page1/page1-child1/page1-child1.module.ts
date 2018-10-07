import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Child1Component } from './page1-child1.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: '', component: Page1Child1Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [Page1Child1Component]
})
export class Page1Child1Module { }
