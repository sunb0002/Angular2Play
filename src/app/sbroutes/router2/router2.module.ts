import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router2RoutingModule } from './router2-routing.module';
import { PrecureComponent } from './precure/precure.component';
import { UltramanComponent } from './ultraman/ultraman.component';
import { PrecureBaseComponent } from './precure-base/precure-base.component';
import { PriparaComponent } from './pripara/pripara.component';
import { ReactiveFormsModule } from "@angular/forms"; //Must add this manually to support reactive form
import { MdlModule } from '@angular-mdl/core';

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
