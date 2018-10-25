import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftnavComponent } from './components/leftnav/leftnav.component';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import { DataTableComponent } from './components/data-table/data-table.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { AppStateService } from 'src/app/common/services/app-state.service';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppStateService],
  declarations: [ HeaderComponent, FooterComponent, LeftnavComponent, DataTableComponent, BreadCrumbComponent, PaginationComponent ],
  exports: [ HeaderComponent, FooterComponent, LeftnavComponent, DataTableComponent, BreadCrumbComponent, PaginationComponent ]
})
export class CommonModules { }
