import { SbresolveGuard } from './../../sbauth/sbresolve.guard';
import { SbauthGuard } from './../../sbauth/sbauth.guard';
import { UltramanComponent } from './ultraman/ultraman.component';
import { PrecureBaseComponent } from './precure-base/precure-base.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrecureComponent } from './precure/precure.component';

export const routes2: Routes = [
  {
    path: 'persub',
    component: PrecureBaseComponent,
    canActivate: [SbauthGuard],
    resolve: { xxx: SbresolveGuard },
    children: [
      { path: 'ultra', component: UltramanComponent },
      { path: ':id', component: PrecureComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes2)],
  exports: [RouterModule]
})
export class Router2RoutingModule { }
