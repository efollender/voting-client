import * as ui from './constants';

export function setState(state) {
	return {
		type: ui.SET_STATE,
		state
	};
}

export function vote(entry) {
	return {
		type: ui.VOTE,
		entry
	};
}