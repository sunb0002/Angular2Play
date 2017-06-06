import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SbroutesRoutingModule } from './sbroutes-routing.module';
import { Persona1Component } from './persona1/persona1.component';
import { Persona2Component } from './persona2/persona2.component';
import { Persona3Component } from './persona3/persona3.component';
import { PersonaNotFoundComponent } from './persona-not-found/persona-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    SbroutesRoutingModule
  ],
  declarations: [Persona1Component, Persona2Component, Persona3Component, PersonaNotFoundComponent]
})
export class SbroutesModule { }
