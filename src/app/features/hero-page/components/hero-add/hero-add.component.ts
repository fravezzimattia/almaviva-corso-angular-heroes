import { Component, OnInit } from '@angular/core';
import { HeroDto } from '../../models/hero-dto.model';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'app-hero-add',
	templateUrl: './hero-add.component.html',
	styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {
	public name: string = '';

	constructor(
		private heroService: HeroService
	) { }

	ngOnInit(): void {
	}

	public save() {
		const hero: HeroDto = new HeroDto({
			id: undefined,
			ability: 'Super Code!',
			name: this.name
		});

		this.heroService.add(hero);

	}
}
