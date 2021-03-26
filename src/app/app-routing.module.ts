import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [{
	path: 'hero-page',
	loadChildren: () => import('./features/hero-page/hero-page.module').then(res => res.HeroPageModule)
}, {
	path: 'admin-page',
	loadChildren: () => import('./features/admin-page/admin-page.module').then(res => res.AdminPageModule)
}, {
	path: 'login-page',
	loadChildren: () => import('./features/login-page/login-page.module').then(res => res.LoginPageModule)
}];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
