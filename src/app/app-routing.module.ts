import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CrisisListComponent }   from './crisis-list.component';
//import { HeroListComponent }     from './hero-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { TestComponent }     from './test.component';
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
//  { path: 'heroes', component: HeroListComponent },
  { path: 'aaa', component: TestComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
