import { MdlModule } from '@angular-mdl/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrecureBaseComponent } from './precure-base/precure-base.component';
import { PrecureComponent } from './precure/precure.component';
import { PriparaComponent } from './pripara/pripara.component';
import { Router2RoutingModule } from './router2-routing.module';
import { UltramanComponent } from './ultraman/ultraman.component';

@NgModule({
  imports: [
    CommonModule,
    Router2RoutingModule,
    ReactiveFormsModule,
    MdlModule, //angular2-mdl
  ],
  declarations: [PrecureComponent, UltramanComponent, PrecureBaseComponent, PriparaComponent]
})
export class Router2Module { }
