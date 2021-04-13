import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { AppRoutings } from '../configs/app-routings';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

	constructor(
		public router: Router
	) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request)
			.pipe(catchError((err: any) => {
				if (err.status === 401) {
					this.router.navigate([AppRoutings.loginPage]);
					return throwError(null);
				}
				return throwError(err);
			}));
	}
}
