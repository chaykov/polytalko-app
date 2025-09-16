import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/react";
import { queryConfig } from "../shared/lib/react-query.ts";
// import { AuthProvider } from "@/context/AuthProvider";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: queryConfig,
            })
    );

    return (
        <React.Suspense
            fallback={
                <div className="flex h-screen w-screen items-center justify-center">
                    <p>Loading...</p>
                </div>
            }
        >
            {/*<ErrorBoundary FallbackComponent={MainErrorFallback}>*/}
                <QueryClientProvider client={queryClient}>
                    {/*{import.meta.env.DEV && <ReactQueryDevtools />}*/}
                    {/*<AuthProvider>*/}
                        <NuqsAdapter>{children}</NuqsAdapter>
                    {/*</AuthProvider>*/}
                </QueryClientProvider>
            {/*</ErrorBoundary>*/}
        </React.Suspense>
    );
};