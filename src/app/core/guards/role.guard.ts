import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoles } from '../configs/app-roles';
import { LocalStorageItem } from '../configs/local-storage-item';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanLoad {
	constructor(
		private localStorageService: LocalStorageService
	) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.checkPermission(route.data?.role);
	}

	canLoad(
		route: Route,
		segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.checkPermission(route.data?.role);
	}

	checkPermission(role: AppRoles): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		const user = this.localStorageService.getItem(LocalStorageItem.user);
		if (!!user && !!role && user.role !== role) {
			return false;
		}
		return true;
	}
}
