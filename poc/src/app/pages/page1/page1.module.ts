import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  { path: '', component: Page1Component, children: [
    { path: 'child1', loadChildren: 'src/app/pages/page1/page1-child1/page1-child1.module#Page1Child1Module' },
    { path: 'child2', loadChildren: 'src/app/pages/page1/page1-child2/page1-child2.module#Page1Child2Module' },
  ] }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [Page1Component]
})
export class Page1Module { }
