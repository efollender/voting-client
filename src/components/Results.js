import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {shouldPureComponentUpdate} from 'react-pure-render';
import * as actionCreators from '../action_creators';
import Winner from './Winner';

const mapStateToProps = state => {
	return {
		pair: state.getIn(['vote', 'pair']),
		tally: state.getIn(['vote', 'tally']),
		winner: state.get('winner')
	};
}

export class Results extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;
  static propTypes = {
    pair: PropTypes.any,
    tally: PropTypes.object,
    winner: PropTypes.string
  };
  getPair() {
    return this.props.pair || [];
  }
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }
  render() {
    return this.props.winner ?
  		<Winner winner={this.props.winner} ref="winner"/> :
  		 <div className="results">
      	<div className="tally">
	        {this.getPair().map(entry =>
	          <div key={entry} className="entry">
	            <h1>{entry}</h1>
	            <div className="voteCount">
	              {this.getVotes(entry)}
	            </div>
	          </div>
	        )}
	      </div>
	      <div className="management">
	      	<button ref="next"
	      					className="next"
	      					onClick={this.props.next}>
	      					Next
	      	</button>
	      </div>
      </div>
    ;
  }
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results); 