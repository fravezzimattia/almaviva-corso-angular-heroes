import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppRoles } from './core/configs/app-roles';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { AppRoutings } from './core/configs/app-routings';

const routes: Routes = [{
	path: AppRoutings.heroPage,
	loadChildren: () => import('./features/hero-page/hero-page.module').then(res => res.HeroPageModule),
	canActivate: [AuthGuard],
	canLoad: [AuthGuard]
}, {
	path: AppRoutings.adminPage,
	loadChildren: () => import('./features/admin-page/admin-page.module').then(res => res.AdminPageModule),
	canActivate: [AuthGuard, RoleGuard],
	canLoad: [AuthGuard, RoleGuard],
	data: {
		role: AppRoles.Admin
	}
}, {
	path: AppRoutings.loginPage,
	loadChildren: () => import('./features/login-page/login-page.module').then(res => res.LoginPageModule)
}];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
