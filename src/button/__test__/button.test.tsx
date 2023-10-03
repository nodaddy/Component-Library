import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'
import Button from '../button';

const testProps = {
    label: 'Click me',
    onClick: jest.fn()
}

describe('button', () => {
    it('shows label as its innerHTML when label is passed', () => {
        render(<Button {...testProps} />);
        const button = screen.getByTestId('button');
        expect(button.innerHTML).toBe(testProps.label);
    });

    it('calls the onClick function when clicked', () => {
        render(<Button {...testProps} />)
        const button = screen.getByTestId('button');
        expect(button).toBeInTheDocument;
        fireEvent.click(button);
        expect(testProps.onClick).toHaveBeenCalled();
    })
});

// TODO: Explore snapshot testing