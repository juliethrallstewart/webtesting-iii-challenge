import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls.js';

describe('<Controls />', () => {
	it('matches snapshot', () => {
		const tree = renderer.create(<Controls />);
		expect(tree.toJSON()).toMatchSnapshot();
	});
	it('cannot opened if it is locked', () => {
		const { getByText } = render(<Controls closed={true} locked={true} />);
		const openGateButton = getByText(/open gate/i);
		expect(openGateButton).toBeDisabled();
	});
	it('cannot lock gate if it is open', () => {
		const { getByText } = render(<Controls closed={false} locked={false} />);
		const lockGateButton = getByText(/lock gate/i);
		expect(lockGateButton).toBeDisabled();
	});
	// it('close gate button with mocked function', () => {
	// 	const click = jest.fn();
	// 	const { getByText } = render(<Controls toggleClosed={click} />);
	// 	const doorButton = getByText(/lock/i);
	// 	fireEvent.click(doorButton);
	// 	expect(click).toBeCalled();
	// });
	// it('lock gate button with mocked funtion', () => {
	// 	const click = jest.fn();
	// 	const { getByText } = render(<Controls toggleClosed={click} />);
	// 	const lockButton = getByText(/close/i);
	// 	fireEvent.click(lockButton);
	// 	expect(click).toBeCalled();
	// });
});

// - cannot be closed or opened if it is locked
