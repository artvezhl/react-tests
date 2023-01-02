import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import NavBar from "./NavBar";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('navbar tests', () => {
    beforeEach(() => {
        renderWithRouter(<NavBar />);
    });

    test('test about link', () => {
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page'));
    });

    test('test main link', () => {
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page'));
    });

    test('test users link', () => {
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page'));
    });


    // test('render navbar links', () => {
    //     const mainLink = screen.getByTestId('main-link');
    //     const aboutLink = screen.getByTestId('about-link');
    //     const usersLink = screen.getByTestId('users-link');
    //     userEvent.click(aboutLink);
    //     expect(screen.getByTestId('about-page'));
    //     userEvent.click(usersLink);
    //     expect(screen.getByTestId('users-page'));
    //     userEvent.click(mainLink);
    //     expect(screen.getByTestId('main-page'));
    // })
})
