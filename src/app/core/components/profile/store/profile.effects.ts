import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProfileService, User } from 'src/app/core/services/profile.service';
import { getProfile, getProfileError, getProfileSuccess } from './profile.actions';

@Injectable()
export class ProfileEffects {
	constructor(
		private action$: Actions,
		private profileService: ProfileService
	) { }

	effectProfile$ = createEffect(() =>
		this.action$.pipe(
			ofType(getProfile),
			switchMap((action: { id: number }) => {
				return this.profileService.getProfile(action.id)
					.pipe(
						map((user: User) => getProfileSuccess({ user })),
						catchError(error => of(getProfileError()))
					);
			})
		)
	);
}