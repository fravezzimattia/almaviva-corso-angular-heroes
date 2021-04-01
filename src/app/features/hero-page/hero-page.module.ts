import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroPageRoutingModule } from './hero-page-routing.module';
import { HeroPageComponent } from './hero-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroAddComponent } from './components/hero-add/hero-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroService } from './services/hero.service';
import { HeroStore } from './services/hero.store';

@NgModule({
	declarations: [
		HeroPageComponent,
		HeroListComponent,
		HeroAddComponent
	],
	imports: [
		CommonModule,
		HeroPageRoutingModule,
		SharedModule,
		MatListModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		HeroStore,
		HeroService
	]
})
export class HeroPageModule { }
