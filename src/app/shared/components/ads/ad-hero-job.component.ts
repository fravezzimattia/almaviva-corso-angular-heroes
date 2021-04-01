import { Component, Input } from "@angular/core";
import { AdsComponent } from "./ads.component";

@Component({
	template: `
	<div class='banner'>
		<h3>Job Desc</h3>
		<span>{{ data.title }}</span>
		<br>
		<span>{{ data.bio }}</span>
	</div>
	`
})
export class AdHeroJobComponent implements AdsComponent {
	@Input()
	public data: any;
}