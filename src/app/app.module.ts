import { RouterModule } from '@angular/router';
import { Persona2Component } from './sbroutes/persona2/persona2.component';
import { Persona1Component } from './sbroutes/persona1/persona1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.myroutes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoListService } from './todo-list.service';
import { DonepipePipe } from './donepipe.pipe';
import { BsButtonDirective } from './bs-button.directive';
import { PersonaNotFoundComponent } from "app/sbroutes/persona-not-found/persona-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddFormComponent,
    TodoItemsComponent,
    DonepipePipe,
    BsButtonDirective,
    Persona1Component,
    Persona2Component,
    PersonaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) //must manually add
  ],
  providers: [TodoListService], //import my service
  bootstrap: [AppComponent]
})
export class AppModule { }
