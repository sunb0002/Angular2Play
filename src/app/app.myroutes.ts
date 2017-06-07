import { Router2Module } from './sbroutes/router2/router2.module';
import { PersonaNotFoundComponent } from './sbroutes/persona-not-found/persona-not-found.component';
import { Persona2Component } from './sbroutes/persona2/persona2.component';
import { Persona1Component } from './sbroutes/persona1/persona1.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'per1', component: Persona1Component },
    { path: 'per2', component: Persona2Component },
    { path: 'per3', redirectTo: 'per1' },
    { path: 'persub', loadChildren: './sbroutes/router2/router2.module#Router2Module' },
    { path: '**', component: PersonaNotFoundComponent }
];