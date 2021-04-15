import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AppConfig } from 'src/app/core/configs/app-config';
import { HeroStore } from './hero.store';

@Injectable()
export class AbilityService {
	constructor(
		private httpClient: HttpClient,
		private heroStore: HeroStore,
		private appConfig: AppConfig
	) { }

	public getAbilitiesById(id: number) {
		return this.httpClient
			.get(`${this.appConfig.baseUrl}${this.appConfig.endpoints.abilities.baseUrl}\\${id}`);
	}

	public joinHeroAbilities(id: number) {
		return this.httpClient
			.get(`${this.appConfig.baseUrl}${this.appConfig.endpoints.heroesAbilities.baseUrl}?heroId=${id}`)
			.pipe(tap(res => console.log(res)));
	}

	public saveAbility(item: any) {
		return this.httpClient
			.post(`${this.appConfig.baseUrl}${this.appConfig.endpoints.abilities.baseUrl}`, item);
	}
}
