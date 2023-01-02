import {render, screen} from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter component test', () => {
    test('increment/decrement test', () => {
        const { getByTestId } = renderTestApp(null, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        });
        const incrementBtn = getByTestId('increment-btn');
        const decrementBtn = getByTestId('decrement-btn');
        expect(getByTestId('title-value')).toHaveTextContent('10');
        userEvent.click(incrementBtn);
        expect(getByTestId('title-value')).toHaveTextContent('11');
        userEvent.click(decrementBtn);
        expect(getByTestId('title-value')).toHaveTextContent('10');
    })
})
