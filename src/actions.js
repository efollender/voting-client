//return a merged state
export function setState(state, newState) {
	return state.merge(newState);
}

//Sets hasVoted if entry is in pair
export function vote(state, entry) {
	const currentPair = state.getIn(['vote', 'pair']);
	if (currentPair && currentPair.includes(entry)) {
		return state.set('hasVoted', entry);
	} else {
		return state;
	}
}

//removes hasVoted if pair changes
export function resetVote(state) {
	const hasVoted = state.get('hasVoted');
	const currentPair = state.getIn(['vote', 'pair']);
	if (hasVoted && !currentPair.includes(hasVoted)) {
		return state.remove('hasVoted');
	} else {
		return state;
	}
}