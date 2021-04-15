import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppLanguages } from '../configs/app-languages';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {
	private languageBs = new BehaviorSubject<string>(AppLanguages.it);
	private language$ = this.languageBs.asObservable();

	public setLanguage(value: string) {
		this.languageBs.next(value);
	}

	public getLanguage() {
		return this.language$;
	}
}
