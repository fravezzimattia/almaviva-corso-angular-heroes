import { Injectable } from '@angular/core';
import { AdHeroJobComponent } from 'src/app/shared/components/ads/ad-hero-job.component';
import { HeroProfileComponent } from 'src/app/shared/components/ads/hero-profile.component';
import { AdItem } from 'src/app/shared/models/ad-item.model';

@Injectable({
	providedIn: 'root'
})
export class AdService {
	getAds() {
		return [
			new AdItem(HeroProfileComponent, { name: 'nome di Prova', bio: 'bio di prova' }),
			new AdItem(AdHeroJobComponent, { title: 'Title di Prova', bio: 'bio di prova' }),
			new AdItem(HeroProfileComponent, { name: 'nome di Prova 2', bio: 'bio di prova 2' }),
			new AdItem(AdHeroJobComponent, { title: 'title di Prova 2', bio: 'bio di prova 2' })
		]
	}
}
