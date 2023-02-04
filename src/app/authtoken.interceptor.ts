import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable()
export class AuthtokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken=localStorage.getItem('token')
    return next.handle(request.clone({setHeaders:{authorization:`Bearer ${accessToken}`}}));
  }
}
