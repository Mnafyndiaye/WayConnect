import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const myToken = localStorage.getItem('token');
    if (myToken) {
      const cloneRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${myToken}`
        }
      });
      return next.handle(cloneRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigateByUrl('/login');
            return throwError('Token expired');
          } else {
            return throwError(error);
          }
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
