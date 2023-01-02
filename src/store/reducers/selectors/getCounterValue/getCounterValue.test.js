import {getCounterValue} from "./getCounterValue";

describe('Selector test', () => {
    test('work with empty state', () => {
        expect(getCounterValue({})).toBe( 0);
    })
    test('work with not empty state', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe( 100);
    })
})
