import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroAddComponent } from './components/hero-add/hero-add.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroPageComponent } from './hero-page.component';

const routes: Routes = [{
	path: '',
	component: HeroPageComponent,
	children: [
		{
			path: 'add',
			component: HeroAddComponent
		},
		{
			path: 'list',
			component: HeroListComponent
		}
	]
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HeroPageRoutingModule { }
