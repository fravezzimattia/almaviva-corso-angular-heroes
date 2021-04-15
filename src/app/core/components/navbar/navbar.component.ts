import { Component, OnInit } from '@angular/core';
import { ThemeEnum } from 'src/app/shared/enums/theme.enum';
import { AppLanguages } from '../../configs/app-languages';
import { ConfigService } from '../../services/config.service';
import { LanguageService } from '../../services/language.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	public themeEnum = ThemeEnum;
	public appLanguages = AppLanguages;
	constructor(
		public configService: ConfigService,
		public languageService: LanguageService
	) { }

	ngOnInit(): void {
		this.languageService.getLanguage()
			.subscribe(res => console.log(res));
	}

	public changeLanguage(item: any) {
		this.languageService.setLanguage(item.value);
	}
}
