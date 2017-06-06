import { PersonaNotFoundComponent } from './sbroutes/persona-not-found/persona-not-found.component';
import { Persona2Component } from './sbroutes/persona2/persona2.component';
import { Persona1Component } from './sbroutes/persona1/persona1.component';
import { Persona3Component } from './sbroutes/persona3/persona3.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'per1', component: Persona1Component },
    { path: 'per2', component: Persona2Component },
    { path: 'per3', component: Persona3Component },
    { path: 'per*', redirectTo: 'per1' },
    { path: '**', component: PersonaNotFoundComponent },
];