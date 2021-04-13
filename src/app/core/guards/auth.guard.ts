import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutings } from '../configs/app-routings';
import { LocalStorageItem } from '../configs/local-storage-item';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(
		private localStorageService: LocalStorageService,
		private router: Router
	) { }

	public canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.checkAuthorization();
	}
	public canLoad(
		route: Route,
		segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.checkAuthorization();
	}

	private checkAuthorization() {
		return !!this.localStorageService.getItem(LocalStorageItem.user)
			? true
			: this.router.createUrlTree([AppRoutings.loginPage])
	}

}
