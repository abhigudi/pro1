import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubpageCommonComponent } from 'src/app/pages/subpage-common/subpage-common.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';

const route: Routes = [
  { path: '', component: SubpageCommonComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule
  ],
  declarations: [SubpageCommonComponent]
})
export class SubpageCommonModule { }
