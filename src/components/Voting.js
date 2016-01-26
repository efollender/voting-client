import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {shouldPureComponentUpdate} from 'react-pure-render/function';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

const mapStateToProps = state => {
	return {
		pair: state.getIn(['vote', 'pair']),
		winner: state.get('winner'),
		hasVoted: state.get('hasVoted')
	};
}

export class Voting extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;
	static propTypes = {
		pair: PropTypes.any,
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

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);