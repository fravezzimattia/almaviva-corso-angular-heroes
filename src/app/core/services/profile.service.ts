import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../configs/app-config';

export class User {
	public id!: number;
	public nome!: string;
}

@Injectable({
	providedIn: 'root'
})
export class ProfileService {

	constructor(
		private http: HttpClient,
		private appConfig: AppConfig
	) { }

	getProfile(id: number): Observable<User> {
		return this.http
			.get<User>(`${this.appConfig.baseUrl}${this.appConfig.endpoints.profiles.baseUrl}/${id}`)
	}
}
