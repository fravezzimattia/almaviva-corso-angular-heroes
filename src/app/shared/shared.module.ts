import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { materialModule } from './material.module';
import { AdDirective } from './directives/ad-host.directive';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { AdHeroJobComponent, HeroProfileComponent } from './components/';
import { BaseComponent } from './components/base/base.component';

@NgModule({
	declarations: [
		AlertComponent,
		AdBannerComponent,
		AdHeroJobComponent,
		HeroProfileComponent,
		AdDirective,
		BaseComponent
	],
	imports: [
		CommonModule,
		...materialModule
	],
	exports: [
		AlertComponent,
		AdBannerComponent,
		AdDirective,
		AdHeroJobComponent,
		HeroProfileComponent,
		...materialModule
	]
})
export class SharedModule { }
