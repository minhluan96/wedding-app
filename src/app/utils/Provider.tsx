'use client'

import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryStreamedHydration} from "@tanstack/react-query-next-experimental";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function Provider({ children }: React.PropsWithChildren): JSX.Element {
    const [client] = useState(new QueryClient());
    
    return (
        <QueryClientProvider client={client}>
            <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        </QueryClientProvider>
    )
}