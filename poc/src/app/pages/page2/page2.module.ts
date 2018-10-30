import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModules } from 'src/app/common/common.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const route: Routes = [
  { path: '', component: Page2Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    CommonModules,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [Page2Component]
})
export class Page2Module { }
