import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRoter";
import { render } from "@testing-library/react";

export const renderWithRouter = (component, initialRoute = '/') => {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    );
}
