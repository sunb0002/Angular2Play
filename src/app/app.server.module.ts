import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    SimpleNotificationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
