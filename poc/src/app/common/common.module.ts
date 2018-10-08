import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftnavComponent } from './components/leftnav/leftnav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ HeaderComponent, FooterComponent, LeftnavComponent ],
  exports: [ HeaderComponent, FooterComponent, LeftnavComponent ]
})
export class CommonModules { }
