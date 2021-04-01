import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroDto } from '../models/hero-dto.model';
import { HeroStore } from './hero.store';

@Injectable()
export class HeroService {
	constructor(
		private httpClient: HttpClient,
		private heroStore: HeroStore
	) { }

	public getHeroes() {
		this.httpClient.get<HeroDto[]>('http://localhost:3000/heroes')
			.subscribe(res => this.heroStore.init(res))
	}

	public delete(id: number) {
		this.httpClient.delete('http://localhost:3000/heroes/' + id)
			.subscribe(() => this.heroStore.delete(id))
	}

	public add(hero: HeroDto) {
		this.httpClient.post('http://localhost:3000/heroes', hero)
			.subscribe()
	}
}
