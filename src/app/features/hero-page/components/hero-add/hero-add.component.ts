import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hero-add',
	templateUrl: './hero-add.component.html',
	styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {
	public name: string = '';

	constructor() { }

	ngOnInit(): void {
	}

	public save() {
		console.log(this.name);
	}
}
