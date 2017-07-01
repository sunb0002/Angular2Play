import { PriparaComponent } from './sbroutes/router2/pripara/pripara.component';
import { SbauthGuard } from './sbauth/sbauth.guard';
import { Router2Module } from './sbroutes/router2/router2.module';
import { PersonaNotFoundComponent } from './sbroutes/persona-not-found/persona-not-found.component';
import { Persona2Component } from './sbroutes/persona2/persona2.component';
import { Persona1Component } from './sbroutes/persona1/persona1.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'unauthorized', component: PersonaNotFoundComponent },
    { path: 'perX', component: PersonaNotFoundComponent },
    { path: 'per2', component: Persona2Component, canActivate: [SbauthGuard] },
    { path: 'per3', redirectTo: 'per1' },
    { path: 'persub', loadChildren: './sbroutes/router2/router2.module#Router2Module' },
    // { path: 'persub', component: PriparaComponent },
    { path: '**', component: Persona1Component }
];