import React, {Component, PropTypes} from 'react';

export default class Voting extends Component {
	static propTypes = {
		pair: PropTypes.array,
		vote: PropTypes.func,
		hasVoted: PropTypes.bool
	};
	getPair() {
		return this.props.pair || [];
	}
	isDisabled() {
		return !!this.props.hasVoted;
	}
	render() {
		let pair = this.getPair();
		return (
			<div className="voting">
				{pair.map(entry => {
					return (
						<button
							disabled={this.isDisabled()} 
							onClick={() => this.props.vote(entry)}
							key={entry}>
							<h1>{entry}</h1>
						</button>
					);
				})}
			</div>
		);
	}
}