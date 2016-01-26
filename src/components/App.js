import React, {Component} from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});


export default class App extends Component {
	render() {
		return (
			<div>
				{React.cloneElement(this.props.children, {
					pair: pair,
					tally: tally
				})}
			</div>
		);
	}
}
