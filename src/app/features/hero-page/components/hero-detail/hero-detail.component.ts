import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, Subject } from 'rxjs';
import { map, reduce, switchMap, take, takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { AbilityService } from '../../services/ability.service';

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent extends BaseComponent implements OnInit, OnDestroy {
	public abilityList$!: Observable<any[]>;

	public obsTest$ = new Observable<any>();

	constructor(
		public route: ActivatedRoute,
		public abilityService: AbilityService
	) {
		super();
	 }


	ngOnInit(): void {
		this.abilityList$ = this.route.params
			.pipe(
				switchMap((res) => this.abilityService.joinHeroAbilities(+res.id)),
				switchMap((x: any) => {
					var obs: Observable<any>[] = [];
					x.forEach((k: any) => {
						var itemObs = this.abilityService.getAbilitiesById(k.abilityId);
						obs.push(itemObs);
					});
					debugger;
					return forkJoin(obs);
				})
			)
		this.obsTest$
			.pipe(takeUntil(this.unsubscribeAll))
			.subscribe();
	}

	saveAbility(item: any) {
		this.abilityService.saveAbility(item)
			.pipe(take(1))
			.subscribe()
	}
}