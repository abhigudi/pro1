import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: 'page1', loadChildren: 'src/app/modules/page1/page1.module#Page1Module'},
  { path: 'page2', loadChildren: 'src/app/modules/page2/page2.module#Page2Module'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
