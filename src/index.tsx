import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

import './index.css'

import {lazy, Suspense} from "react";

const Root = lazy(() => import("@/routes/root.tsx"));
const Index = lazy(() => import("@/routes/index.tsx"));
const PokemonList = lazy(() => import("@/routes/pokemon/index.tsx"));
const PokemonDetail = lazy(() => import("@/routes/pokemon/$id.tsx"));
const ErrorPage = lazy(() => import("@/routes/error-page.tsx"));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 10,
        },
    },
})

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: "/pokemon",
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <PokemonList/>,
                    },
                    {
                        path: ":id",
                        element: <PokemonDetail/>,
                    }
                ]
            },
            {
                path: "/info",
                // element: <Info/>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/contact",
                // element: <Contact/>,
                errorElement: <ErrorPage />,
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div className="p4">Loading...</div>}>
                <RouterProvider router={router}/>
            </Suspense>
            <ReactQueryDevtools buttonPosition="bottom-right"/>
        </QueryClientProvider>
    </React.StrictMode>,
)
