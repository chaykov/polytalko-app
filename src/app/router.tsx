import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import DashboardLayout from "../layouts/dashboard.tsx";

const DashboardPage = lazy(() => import("../pages/dashboard"));

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <DashboardLayout />
        ),
        children: [
            {
                index: true,
                element: (
                    <DashboardPage />
                )
            }
        ]
    }
])