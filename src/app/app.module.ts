import { MdlModule } from '@angular-mdl/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PersonaNotFoundComponent } from 'app/sbroutes/persona-not-found/persona-not-found.component';

import { environment } from './../environments/environment';
import { AddFormComponent } from './add-form/add-form.component';
import { AppComponent } from './app.component';
import { routes } from './app.myroutes';
import { BsButtonDirective } from './bs-button.directive';
import { DonepipePipe } from './donepipe.pipe';
import { HeaderComponent } from './header/header.component';
import { SbauthModule } from './sbauth/sbauth.module';
import { SbhttpService } from './sbhttp.service';
import { Persona1Component } from './sbroutes/persona1/persona1.component';
import { Persona2Component } from './sbroutes/persona2/persona2.component';
import { Router2Module } from './sbroutes/router2/router2.module';
import { SbstatusService } from './sbstatus.service';
import { APIS } from './shared/api';
import { BASE_PATH } from './shared/variables';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoListService } from './todo-list.service';

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
