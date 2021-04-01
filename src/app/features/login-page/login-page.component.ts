import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';
import { ThemeEnum } from 'src/app/shared/enums/theme.enum';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	public themeEnum = ThemeEnum;
	constructor(
		public configService: ConfigService
	) { }
}
