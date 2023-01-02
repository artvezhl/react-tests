import App from "./App";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";

describe('test APP',  () => {
    test('Router test', () => {
        render(<MemoryRouter><App /></MemoryRouter>);
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByText('ABOUT PAGE')).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('Error page test', () => {
        render(<MemoryRouter initialEntries={['/asffgds']}><App /></MemoryRouter>);
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
});
