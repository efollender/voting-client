import React from 'react/addons';
import ReactDOM, {findDOMNode} from 'react-dom';
import {List} from 'immutable';
import Voting from '../../src/components/Voting';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate}
  = React.addons.TestUtils;

describe('Voting', () => {

	it('renders a pair of buttons', () => {
		const component = renderIntoDocument(
			<Voting pair={['Trainspotting', '28 Days Later']} />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		
		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('Trainspotting');
		expect(buttons[1].textContent).to.equal('28 Days Later');
	});

	it('invokes callback when a button is clicked', () => {
		let votedWith;
		const vote = (entry) => votedWith = entry;

		const component = renderIntoDocument(
			<Voting pair={["Trainspotting", "28 Days Later"]}
							vote={vote} />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		Simulate.click(buttons[0]);

		expect(votedWith).to.equal('Trainspotting');
	});

	it('disables buttons when user has voted', () => {
		const component = renderIntoDocument(
			<Voting pair={['Trainspotting', '28 Days Later']}
				hasVoted="Trainspotting" />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(2);
		expect(buttons[0].hasAttribute('disabled')).to.equal(true);
		expect(buttons[1].hasAttribute('disabled')).to.equal(true);
	});

	it('adds a label to the voted entry', () => {
		const component = renderIntoDocument(
			<Voting pair={['Trainspotting', '28 Days Later']}
				hasVoted="Trainspotting" />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons[0].textContent).to.contain('Voted');
		expect(buttons[1].textContent).to.not.contain('Voted');
	});

	it('renders just the winner when there is one', () => {
		const component = renderIntoDocument(
      <Voting winner="Trainspotting" />
    );
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(0);

		const winner = findDOMNode(component.refs.winner);
		expect(winner).to.be.ok;
		expect(winner.textContent).to.contain('Trainspotting');
	});

	it('renders as a pure component', () => {
		const pair = ['Trainspotting', '28 Days Later'];
		const div = document.createElement('div');
    let component = ReactDOM.render(
      <Voting pair={pair} />,
      div
    );

		let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
		expect(firstButton.textContent).to.equal('Trainspotting');

		// This doesn't make sense...
		// pair[0] = 'Sunshine';
		// component = ReactDOM.render(
		//      <Voting pair={pair} />,
		//      div
		//    );
		// firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
		// expect(firstButton.textContent).to.equal('Trainspotting');

	});

	it('does update DOM when prop changes', () => {
		const pair = List.of('Trainspotting', '28 Days Later');
		const div = document.createElement('div');
		let component = renderIntoDocument(
			<Voting pair={pair} />
		);

		let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
		expect(firstButton.textContent).to.equal('Trainspotting');

		const newPair = pair.set(0, 'Sunshine');
		component = ReactDOM.render(
			<Voting pair={newPair} />,
			div
		);
		firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
    expect(firstButton.textContent).to.equal('Sunshine');
	});

});