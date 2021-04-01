import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { HeroStore } from '../../services/hero.store';

@Component({
	selector: 'app-hero-list',
	templateUrl: './hero-list.component.html',
	styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
	constructor(
		public heroService: HeroService,
		public heroStore: HeroStore
	) { }

	ngOnInit(): void {
		this.heroService.getHeroes();
	}
}
