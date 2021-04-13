import { Injectable } from '@angular/core';
import { AppRoles } from '../configs/app-roles';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	public setItem(value: any, type: AppRoles) {
		localStorage.setItem(<string>type, JSON.stringify(value));
	}

	public getItem(type: AppRoles) {
		const item = localStorage.getItem(<string>type);
		return !!item
			? JSON.parse(item)
			: null;
	}

	public removeItem(type: AppRoles) {
		localStorage.removeItem(<string>type);
	}
}
