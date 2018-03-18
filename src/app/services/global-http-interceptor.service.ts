import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const JWT = `Bearer Hahaha ${new Date()}`;
    req = req.clone({ setHeaders: { Authorization: JWT } });
    console.log('GlobalHttpInterceptor processed req:', req);
    return next.handle(req);
  }

}
