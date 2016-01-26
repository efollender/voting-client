import React from 'react';
import {Route, Router, hashHistory} from 'react-router';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

export default (
	<Router history={hashHistory}>
		<Route component={App}>
			<Route path="/" component={VotingContainer} />
			<Route path="results" component={ResultsContainer} />
		</Route>
	</Router>
	);