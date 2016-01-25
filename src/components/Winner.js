import React, {Component, PropTypes} from 'react';

export default class extends Component{
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