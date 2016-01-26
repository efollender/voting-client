import React, {PropTypes, Component} from 'react';
import {shouldPureComponentUpdate} from 'react-pure-render/function';

export default class Vote extends Component {
	shouldComponentUpdate = shouldPureComponentUpdate;
	static propTypes = {
		pair: PropTypes.any,
		hasVoted: PropTypes.string,
		vote: PropTypes.func
	};
	getPair() {
		return this.props.pair || [];
	}
	isDisabled() {
		return !!this.props.hasVoted;
	}
	hasVotedFor(entry) {
		return this.props.hasVoted === entry;
	}
	render() {
		return (
			<div className="voting">
				{this.getPair().map(entry => {
						return (
							<button
								disabled={this.isDisabled()} 
								onClick={() => this.props.vote(entry)}
								key={entry}>
								<h1>{entry}</h1>
								{this.hasVotedFor(entry) && 
									<div className="label">Voted</div>
								}
							</button>
						);
				})}
			</div>
		);
	}
}