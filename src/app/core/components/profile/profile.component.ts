import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfileState } from './store/profile.reducer';
import { getDisplayName } from './store/profile.selectors';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	public profileName$: Observable<string> = this.store.pipe(select(getDisplayName) as any);

	constructor(
		private readonly store: Store<ProfileState>
	) { }
}
