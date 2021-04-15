import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutings } from 'src/app/core/configs/app-routings';
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
		public heroStore: HeroStore,
		public router: Router
	) { }

	ngOnInit(): void {
		this.heroService.getHeroes();
	}

	public goToDetail(id: number) {
		this.router.navigate([AppRoutings.heroPage, 'detail', id])
	}
}
