import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/core/configs/app-config';
import { HeroDto } from '../models/hero-dto.model';
import { HeroStore } from './hero.store';

@Injectable()
export class HeroService {
	constructor(
		private httpClient: HttpClient,
		private heroStore: HeroStore,
		private appConfig: AppConfig
	) { }

	public getHeroes() {
		this.httpClient.get('http://51.103.149.92/api/server-service')
			.subscribe(res => alert("res"));
		this.httpClient.get<HeroDto[]>(`${this.appConfig.baseUrl}${this.appConfig.endpoints.heroes.baseUrl}`)
			.subscribe(res => this.heroStore.init(res))
	}

	public delete(id: number) {
		this.httpClient.delete(`${this.appConfig.baseUrl}${this.appConfig.endpoints.heroes.baseUrl}/${id}`)
			.subscribe(() => this.heroStore.delete(id))
	}

	public add(hero: HeroDto) {
		this.httpClient.post(`${this.appConfig.baseUrl}${this.appConfig.endpoints.heroes.baseUrl}`, hero)
			.subscribe()
	}
}
