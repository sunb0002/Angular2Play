import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SbauthGuard } from './../../sbauth/sbauth.guard';
import { SbresolveGuard } from './../../sbauth/sbresolve.guard';
import { PrecureBaseComponent } from './precure-base/precure-base.component';
import { PrecureComponent } from './precure/precure.component';
import { PriparaComponent } from './pripara/pripara.component';
import { UltramanComponent } from './ultraman/ultraman.component';

export const routes2: Routes = [
  {
    path: 'persub', // Don't put outlet name!!!
    component: PrecureBaseComponent,
    canActivate: [SbauthGuard],
    data: {
      accessRole: 'NSMAN'
    },
    resolve: { xxx: SbresolveGuard },
    children: [
      { path: 'pripara', component: PriparaComponent },
      { path: 'ultra', component: UltramanComponent },
      { path: 'cure/:id', component: PrecureComponent, data: {accessRole: 'Precure Fans'}}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes2)],
  exports: [RouterModule]
})
export class Router2RoutingModule { }
