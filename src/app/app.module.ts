import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }          from './app.component';
import { CrisisListComponent }   from './crisis-list.component';
//import { HeroListComponent }     from './hero-list.component';
import { TestComponent }     from './test.component';
import { PageNotFoundComponent }     from './not-found.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
//    CrisisListComponent,
	PageNotFoundComponent,
	TestComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
