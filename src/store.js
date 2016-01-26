import {createStore} from 'redux';
import reducer from './reducer';
import {setState} from './action_creators';
import io from 'socket.io-client';

export const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);

socket.on('state', state => {
	store.dispatch(setState(state))
});

