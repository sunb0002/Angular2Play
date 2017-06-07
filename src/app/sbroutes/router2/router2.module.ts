import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router2RoutingModule } from './router2-routing.module';
import { PrecureComponent } from './precure/precure.component';
import { UltramanComponent } from './ultraman/ultraman.component';
import { PrecureBaseComponent } from './precure-base/precure-base.component';

@NgModule({
  imports: [
    CommonModule,
    Router2RoutingModule
  ],
  declarations: [PrecureComponent, UltramanComponent, PrecureBaseComponent]
})
export class Router2Module { }
