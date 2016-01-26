import {List, Map, fromJS} from 'immutable';
import * as ui from '../src/constants';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

	it('handles SET_STATE', () => {
		const initialState = Map();
		const action = {
			type: ui.SET_STATE,
			state: Map({
				vote: Map({
					pair: List.of('Trainspotting', '28 Days Later'),
					tally: Map({Trainspotting: 1})
				})
			})
		};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
				tally: {Trainspotting: 1}
			}
		}));
	});

	it('handles SET_STATE without an initial state', () => {
		const action = {
			type: ui.SET_STATE,
			state: {
				vote: {
					pair: ['Trainspotting', '28 Days Later'],
					tally: {Trainspotting: 1}
				}
			}
		};
		const nextState = reducer(undefined, action);

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
				tally: {Trainspotting: 1}
			}
		}));

	});

	it('handles VOTE by setting hasVoted', () => {
		const state = fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
				tally: {Trainspotting: 1}
			}
		});
		const action = {
			type: ui.VOTE,
			entry: 'Trainspotting'
		};
		const nextState = reducer(state, action);

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
				tally: {Trainspotting: 1}
			},
			hasVoted: 'Trainspotting'
		}));		
	});

	it('does not set hasVoted for VOTE on invalid entry', () => {
		const state = fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days'],
				tally: {Trainspotting: 1}
			}
		});
		const action = {
			type: ui.VOTE,
			entry: 'Sunshine'
		};
		const nextState = reducer(state, action);

		expect(nextState).to.equal(fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days'],
				tally: {Trainspotting: 1}
			}
		}));
	});

	it('removes hasVoted on SET_STATE if pair changes', () => {
		const initialState = fromJS({
			vote: {
				pair: ['Trainspotting', '28 Days Later'],
				tally: {Trainspotting: 1}
			},
			hasVoted: true
		});
		const action = {
			type: ui.SET_STATE,
			state: {
				vote: {
					pair: ['Sunshine', 'Slumdog Millionare']
				}
			}
		};
		const nextState = reducer(initialState, action);
	});

});