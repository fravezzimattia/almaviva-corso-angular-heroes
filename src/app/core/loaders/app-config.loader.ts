import { HttpBackend, HttpClient } from "@angular/common/http";
import { APP_INITIALIZER, Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AppConfig } from "../configs/app-config";

@Injectable()
export class AppConfigLoader {
	public config!: AppConfig;
	private httpClient: HttpClient;

	public static loaderForFactory(loader: AppConfigLoader) {
		return () => loader.read();
	}

	public static getterForFactory(loader: AppConfigLoader) {
		return loader.config;
	}

	constructor(
		private httpBackend: HttpBackend
	) {
		this.httpClient = new HttpClient(httpBackend);
	}

	private read() {
		return this.httpClient
			.get<AppConfig>(this.getConfigUrl())
			.pipe(tap(res => this.config = res))
			.toPromise()
	}

	private getConfigUrl(): any {
		return `./assets/configs/config.json?v=${environment.appVersion}`;
	}
}

export let AppConfigInitializer = {
	provide: APP_INITIALIZER,
	useFactory: AppConfigLoader.loaderForFactory,
	deps: [AppConfigLoader],
	multi: true
}

export let AppConfigGetter = {
	provide: AppConfig,
	useFactory: AppConfigLoader.getterForFactory,
	deps: [AppConfigLoader]
}