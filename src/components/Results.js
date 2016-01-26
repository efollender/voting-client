import React, {Component, PropTypes} from 'react';
import {shouldPureComponentUpdate} from 'react-pure-render';

export default class Results extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;
  static propTypes = {
    pair: PropTypes.array,
    tally: PropTypes.object
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
    return (
      <div className="results">
        {this.getPair().map(entry =>
          <div key={entry} className="entry">
            <h1>{entry}</h1>
            <div className="voteCount">
              {this.getVotes(entry)}
            </div>
          </div>
        )}
      </div>
    );
  }
}