import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/core/services/profile.service";
import { getProfileError, getProfileSuccess } from "./profile.actions";

export interface ProfileState {
	user: User | undefined,
	error: boolean
}

const initialState: ProfileState = {
	user: undefined,
	error: false
}

export const profileReducer = createReducer(
	initialState,
	on(
		getProfileSuccess,
		(state, action) => ({ user: action.user, error: false })
	),
	on(
		getProfileError,
		(state, action) => ({ user: undefined, error: true })
	)
)