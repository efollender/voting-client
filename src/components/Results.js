import React, {Component, PropTypes} from 'react';
import {shouldPureComponentUpdate} from 'react-pure-render';

export default class Results extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;
	render() {
		return (
			<div>
				Results!
			</div>
		);
	}
}