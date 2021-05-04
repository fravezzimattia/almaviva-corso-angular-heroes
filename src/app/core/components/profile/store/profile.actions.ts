import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/services/profile.service";

export const getProfile = createAction(
	'[Profile] Get',
	props<{ id: number }>()
);

export const getProfileSuccess = createAction(
	'[Profile] Get Success',
	props<{ user: User }>()
);

export const getProfileError = createAction(
	'[Profile] Get Error'
);