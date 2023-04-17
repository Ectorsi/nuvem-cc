import React from "react";
import { render, screen } from "@testing-library/react";

import { Modal } from './Base';

const MockModalProps = {
    children: <div>Test</div>,
    showModal: true,
    handleShowModal: jest.fn(),
    modalWrapperStyles: {},
}

describe('PageTitle unit test', () => {
    it('should be able to mach snapshot', () => {
        const { container } = render(<Modal {...MockModalProps} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should be able dont to show the modal', () => {
        render(<Modal {...MockModalProps} />);
        const closeButton = screen.getByText(/x/i);
        expect(closeButton).toBeInTheDocument();
    });
});