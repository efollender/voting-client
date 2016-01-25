import React from 'react';
import {Route, Router, hashHistory} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route component={Voting} />
			<Route path="results" component={Results} />
		</Route>
	</Router>
	);