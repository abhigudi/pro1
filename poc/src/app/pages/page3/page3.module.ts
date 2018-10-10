import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  { path: '', component: Page3Component, children:[
    { path: 'subpage-common', loadChildren: 'src/app/pages/subpage-common/subpage-common.module#SubpageCommonModule'},
  ] }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [Page3Component]
})
export class Page3Module { }
