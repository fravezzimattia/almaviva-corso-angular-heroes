import { Injectable } from "@angular/core";
import { HeroDto } from "../models/hero-dto.model";

@Injectable()
export class HeroStore {
	public heroes: HeroDto[] = [];

	delete(id: number) {
		const index = this.heroes.findIndex((hero: any) => hero.id === id);
		this.heroes.splice(index, 1);
	}

	init(res: HeroDto[]) {
		this.heroes = res;
	}
}