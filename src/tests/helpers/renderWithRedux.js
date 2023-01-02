import {render} from "@testing-library/react";
import {createReduxStore} from "../../store/store";
import Counter from "../../components/Counter/Counter";
import {Provider} from "react-redux";

export const renderWithRedux = (component, initialState = {}) => {
    const store = createReduxStore(initialState);
    return render(<Provider store={store}>{component}</Provider>);
}
