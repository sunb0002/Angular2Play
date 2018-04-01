import { MdlModule } from '@angular-mdl/core';
import { isPlatformBrowser } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_ID, ErrorHandler, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoPreloading, RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { createTranslateLoader } from 'app/config/i18n.loader';
import { PersonaNotFoundComponent } from 'app/sbroutes/persona-not-found/persona-not-found.component';
import { GlobalErrorHandler } from 'app/services/global-error-handler';

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
import { GlobalHttpInterceptorService } from './services/global-http-interceptor.service';
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
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    Router2Module,
    SbauthModule,
    MdlModule, // angular2-mdl
    SimpleNotificationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }
    ),
    RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: NoPreloading }) // no preloading by default already
  ],
  providers: [TodoListService, SbhttpService, APIS, SbstatusService,
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: BASE_PATH, useValue: environment.apiBaseUrl }
  ], // import my services
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platFormId,
    @Inject(APP_ID) private appId
  ) {
    const platForm = isPlatformBrowser(platFormId) ? 'on server' : 'in browser';
    console.log(`Running platFormId=${platFormId}--${platForm} with appId=${appId}`);
  }
}


