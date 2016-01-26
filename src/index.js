import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Routes from './routes';
import * as ui from './constants';
import {store} from './store';

ReactDOM.render(
	<Provider store={store}>
		{Routes}
	</Provider>,
	document.getElementById('app')
);
