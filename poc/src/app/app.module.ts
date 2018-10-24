import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModules } from 'src/app/common/common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
  { path: 'page1', loadChildren: 'src/app/pages/page1/page1.module#Page1Module'},
  { path: 'page2', loadChildren: 'src/app/pages/page2/page2.module#Page2Module'},
  { path: 'page3', loadChildren: 'src/app/pages/page3/page3.module#Page3Module'},
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route, {useHash: true}),
    CommonModules,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
