import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { LocalStorageItem } from '../configs/local-storage-item';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

	constructor(
		private localStorageService: LocalStorageService
	) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const user = this.localStorageService.getItem(LocalStorageItem.user);
		if (!!user && !!user.token) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${user.token}`
				}
			})
		}
		return next.handle(request);
	}
}
