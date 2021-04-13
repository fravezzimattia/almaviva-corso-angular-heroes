import { Component, OnInit } from '@angular/core';
import { AppRoles } from 'src/app/core/configs/app-roles';
import { LocalStorageItem } from 'src/app/core/configs/local-storage-item';
import { ConfigService } from 'src/app/core/services/config.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ThemeEnum } from 'src/app/shared/enums/theme.enum';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	public themeEnum = ThemeEnum;
	public appRoles = AppRoles;

	constructor(
		public configService: ConfigService,
		private localStorageService: LocalStorageService
	) { }

	public login(userType: AppRoles) {
		this.localStorageService.removeItem(LocalStorageItem.user);
		const user = {
			name: 'Mattia',
			role: userType,
			token: 'mio-token'
		};
		this.localStorageService.setItem(user, LocalStorageItem.user);
		alert('Complimenti ti sei loggato come ' + userType);
	}

	public logout() {
		this.localStorageService.removeItem(LocalStorageItem.user);
	}
}
