import React, {Component} from 'react';
import {List, Map} from 'immutable';

export default class App extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
