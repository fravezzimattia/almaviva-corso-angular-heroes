import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/validators/forbidden-name.validator';
import { formCrossValidator } from 'src/app/shared/validators/form-cross.validator';
import { HeroDto } from '../../models/hero-dto.model';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'app-hero-add',
	templateUrl: './hero-add.component.html',
	styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {
	public hero!: HeroDto;
	public myForm!: any;

	constructor(
		private heroService: HeroService,
		private fb: FormBuilder
	) { }

	ngOnInit(): void {
		this.myForm = this.createForm();
	}

	createForm(): any {
		return this.fb.group({
			name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/Prova/i)]],
			ability: ['', Validators.required]
		}, { validators: formCrossValidator })
	}

	public save() {
		// const hero: HeroDto = new HeroDto({
		// 	id: undefined,
		// 	ability: 'Super Code!',
		// 	name: this.name
		// });

		// this.heroService.add(hero);


	}

	get nameForm() {
		return this.myForm.get('name');
	}

	public onSubmit() {
		console.log(this.myForm.value);
	}

	public add(form: any) {
		console.log(form)
	}
}
