import { Component, OnInit } from '@angular/core';
import { ThemeEnum } from 'src/app/shared/enums/theme.enum';
import { ConfigService } from '../../services/config.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	public themeEnum = ThemeEnum;
	constructor(
		public configService: ConfigService
	) { }

	ngOnInit(): void {
	}

}
