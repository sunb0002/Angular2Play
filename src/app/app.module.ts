import { SbstatusService } from './sbstatus.service';
import { environment } from './../environments/environment';
import { BASE_PATH } from './shared/variables';
import { APIS } from './shared/api';
import { SbhttpService } from './sbhttp.service';
import { SbauthModule } from './sbauth/sbauth.module';
import { Router2Module } from './sbroutes/router2/router2.module';
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
import { MdlModule } from '@angular-mdl/core';
import { SidebarComponent } from './sidebar/sidebar.component';

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
    PersonaNotFoundComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Router2Module,
    SbauthModule,
    MdlModule, //angular2-mdl
    RouterModule.forRoot(routes, { useHash: true }) //must manually add
  ],
  providers: [TodoListService, SbhttpService, APIS, SbstatusService,
    { provide: BASE_PATH, useValue: environment.apiBaseUrl }
  ], //import my services
  bootstrap: [AppComponent]
})
export class AppModule { }
