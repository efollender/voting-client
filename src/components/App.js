import React, {Component} from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default class App extends Component {
	render() {
		return (
			<div>
				{React.cloneElement(this.props.children, {pair: pair})}
			</div>
		);
	}
}
