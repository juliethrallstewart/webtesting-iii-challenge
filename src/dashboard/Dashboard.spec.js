import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
	it('matches snapshot', () => {
		const tree = renderer.create(<Dashboard />);
		expect(tree.toJSON()).toMatchSnapshot();
	});
	it('shows the controls and display', () => {
		const { getByText } = render(<Dashboard />);
		const unlockedGate = getByText(/unlocked/i);
		const openGate = getByText(/open/i);
		const lockGateButton = getByText(/lock gate/i);
		const closeGateButton = getByText(/close gate/i);
		expect(unlockedGate).toBeVisible();
		expect(openGate).toBeVisible();
		expect(lockGateButton).toBeVisible();
		expect(closeGateButton).toBeVisible();
	});
});
