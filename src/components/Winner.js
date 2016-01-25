import React, {Component, PropTypes} from 'react';
import {shouldPureComponentUpdate} from 'react-pure-render/function';

export default class Winner extends Component{
	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		winner: PropTypes.string
	};
  render() {
    return (
    	<div className="winner">
     	 Winner is {this.props.winner}!
    	</div>
    );
  }
};