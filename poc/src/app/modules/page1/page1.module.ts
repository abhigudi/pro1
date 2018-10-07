import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  { path: '', component: Page1Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [Page1Component]
})
export class Page1Module { }
