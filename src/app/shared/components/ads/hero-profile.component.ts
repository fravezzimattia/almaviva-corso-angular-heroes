import { Component, Input } from "@angular/core";
import { AdsComponent } from "./ads.component";

@Component({
	template: `
	<div class='banner'>
		<h3>Hero Profile</h3>
		<span>{{ data.name }}</span>
		<br>
		<span>{{ data.bio }}</span>
	</div>
	`
})
export class HeroProfileComponent implements AdsComponent {
	@Input()
	public data: any;
}