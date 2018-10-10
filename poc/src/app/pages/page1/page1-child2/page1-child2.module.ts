import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Child2Component } from './page1-child2.component';
import { RouterModule, Routes } from '@angular/router';
import { Page1Child2Subchild1Component } from './page1-child2-subchild1/page1-child2-subchild1.component';

const route: Routes = [
  { path: '', component: Page1Child2Component, children:[
    { path: 'sub-child1', component: Page1Child2Subchild1Component}
  ] }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [Page1Child2Component, Page1Child2Subchild1Component]
})
export class Page1Child2Module { }
