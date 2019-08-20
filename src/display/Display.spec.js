// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';

import Display from './Display.js';
import Controls from '../controls/Controls';

describe('<Display />', () => {
	it('matches snapshot', () => {
		const tree = renderer.create(<Display />);
		expect(tree.toJSON()).toMatchSnapshot();
	});
	it('defaults to unlocked and open', () => {
		const { getByText } = render(<Display />);
		const lock = getByText(/unlocked/i);
		const door = getByText(/open/i);
		expect(lock).toHaveClass('led green-led');
		expect(door).toHaveClass('led green-led');
	});
	it('unlocked and open are visible on render', () => {
		const { getByText } = render(<Display />);
		const lock = getByText(/unlocked/i);
		const door = getByText(/open/i);
		expect(lock).toBeVisible();
		expect(door).toBeVisible();
	});
	it('locked and unlocked are visible', () => {
		const { getByText } = render(<Display closed={true} locked={true} />);
		const gateDoor = getByText(/closed/i);
		const gateLock = getByText(/locked/i);
		expect(gateDoor).toBeVisible();
		expect(gateLock).toBeVisible();
	});
	it('gate displays closed and locked if the closed and locked props are true', () => {
		const { getByText } = render(<Display closed={true} locked={true} />);
		const gateDoor = getByText(/closed/i);
		const gateLock = getByText(/locked/i);
		expect(gateDoor).toHaveClass('led red-led');
		expect(gateLock).toHaveClass('led red-led');
	});
	it('gate displays open and unlocked if the closed and locked props are false', () => {
		const { getByText } = render(<Display closed={false} locked={false} />);
		const gateDoor = getByText(/open/i);
		const gateLock = getByText(/unlocked/i);
		expect(gateDoor).toHaveClass('led green-led');
		expect(gateLock).toHaveClass('led green-led');
	});
});

//gate cannot be closed or opened if it is locked - button test

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class
