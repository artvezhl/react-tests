import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppOld from './AppOld';

describe('TEST APP', () => {
  test('renders react AppOld elems', () => {
    render(<AppOld />);
    const headingElement = screen.getByText(/hello world/i);
    const btn = screen.getByText(/click me/i);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(headingElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('render react AppOld elems', async () => {
    render(<AppOld />);
    const helloElem = await screen.findByText(/text/i);
    screen.debug();
    expect(helloElem).toBeInTheDocument();
    screen.debug();
  });

  test("CLICK EVENT",  () => {
    render(<AppOld />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test("INPUT EVENT",  () => {
    render(<AppOld />);
    const input = screen.getByTestId('app-input');
    expect(screen.queryByTestId('value-elem')).toContainHTML(' ');
    // fireEvent.input(input, {
    //   target: {
    //     value: "Some string"
    //   }
    // });
    userEvent.type(input, 'Some string');
    expect(screen.queryByTestId('value-elem')).toContainHTML('Some string');
  });
})
