import * as ui from './constants';

export function setState(state) {
	return {
		type: ui.SET_STATE,
		state
	};
}

export function vote(entry) {
	return {
		meta: {remote: true},
		type: ui.VOTE,
		entry
	};
}

export function next() {
	return {
		meta: {remote: true},
		type: ui.NEXT
	};
}