import { RouterProvider } from "react-router";
import { AppProvider } from "./providers.tsx";
import { router } from "./router.tsx";

import './app.css';

export const App = () => {
    return (
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    );
};