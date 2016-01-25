import React, {Component, PropTypes} from 'react';
import {shouldPureComponentUpdate} from 'react-pure-render/function';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;
	static propTypes = {
		pair: PropTypes.array,
		vote: PropTypes.func,
		hasVoted: PropTypes.string,
		winner: PropTypes.string
	};
	render() {
		return (
			<div>
				{this.props.winner &&
					<Winner ref="winner" winner={this.props.winner}/>
				}
				{!this.props.winner &&
					<Vote
						pair={this.props.pair}
						hasVoted={this.props.hasVoted}
						vote={this.props.vote} />
				}
			</div>
		);
	}
}