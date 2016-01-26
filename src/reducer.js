import {Map} from 'immutable';
import * as ui from './constants';
import * as actions from './actions';

export default function(state=Map(), action) {
	const {
		setState, 
		resetVote, 
		vote
	} = actions;
	switch(action.type) {
		case ui.SET_STATE:
			return resetVote(setState(state, action.state));
		case ui.VOTE:
			return vote(state, action.entry);
	}
	return state;
}