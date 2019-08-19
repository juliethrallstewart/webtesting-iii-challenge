// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display.js';

describe('<Display />', () => {
	it('matches snapshot', () => {
		const tree = renderer.create(<Display />);
		expect(tree.toJSON()).toMatchSnapshot();
	});
	it('defaults to unlocked and open', () => {
		const { getByText } = render(<Display />);
		expect(getByText.firstChild.className).toBe('green-led');
	});
});

//cannot be closed or opened if it is locked - button test
