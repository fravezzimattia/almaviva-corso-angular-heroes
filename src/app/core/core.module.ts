import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ConfigService } from './services/config.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigGetter, AppConfigInitializer, AppConfigLoader } from './loaders/app-config.loader';

@NgModule({
	declarations: [
		NavbarComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		HttpClientModule
	],
	exports: [
		NavbarComponent
	]
})
export class CoreModule {
	public static forRoot() {
		return {
			ngModule: CoreModule,
			providers: [
				AppConfigLoader,
				AppConfigInitializer,
				AppConfigGetter,
				ConfigService
			]
		}
	}

	public static forChild() {
		return {
			ngModule: CoreModule
		}
	}

	public static forTest() {
		return {
			ngModule: CoreModule,
			providers: []
		}
	}

	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error("CoreModule is already loaded.");
		}
	}
}
