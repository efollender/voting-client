import React, {Component, PropTypes} from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting extends Component {
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