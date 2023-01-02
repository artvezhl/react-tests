import axios from 'axios';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {renderWithRouter} from "../tests/helpers/renderWithRouter";
import Users from "./Users";

jest.mock('axios');

describe('TEST Users', () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham"
                },
                {
                    "id": 2,
                    "name": "Ervin Howell"
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch"
                }
            ]
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    // test('renders Users component', async () => {
    //     axios.get.mockReturnValue(response);
    //     render(<Users />);
    //     const users = await screen.findAllByTestId('user-item');
    //     expect(users.length).toBe(3);
    //     expect(axios.get).toBeCalledTimes(1);
    //     screen.debug();
    // });

    test('test redirect to details page', async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        await new Promise(r=>setTimeout(()=>r(), 0));
        userEvent.click(users[0]);
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    });
})
