import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';


const routes: Routes = [{
  path:'', component : LandingComponent
}, {
  path: 'about', component : AboutComponent
  },
{path:'plan' , component : PlanComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
