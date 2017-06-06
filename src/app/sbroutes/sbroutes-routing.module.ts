import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Persona1Component } from './persona1/persona1.component';
import { Persona2Component } from './persona2/persona2.component';
import { Persona3Component } from './persona3/persona3.component';
import { PersonaNotFoundComponent } from './persona-not-found/persona-not-found.component';

const routes: Routes = [
  { path: 'per1', component: Persona1Component },
  { path: 'per2', component: Persona2Component },
  { path: 'per3', component: Persona3Component },
  { path: 'per*', redirectTo: 'per1' },
  { path: '**', component: PersonaNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SbroutesRoutingModule { }
