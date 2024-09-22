import type { AppProps } from 'next/app'
import { GlobalStyle } from "@/design-system/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { YooBlogTheme } from "@/design-system/themes";
import { SessionProvider } from "next-auth/react";
import useInitHljs from "@/hook/useInitHljs";
import {HydrationBoundary, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";

export default function MyApp({ Component, pageProps }: AppProps) {

    useInitHljs();
    const [queryClient] = useState(() => new QueryClient());

    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <HydrationBoundary state={pageProps.dehydratedState}>
                    <ThemeProvider theme={YooBlogTheme}>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </HydrationBoundary>
            </QueryClientProvider>
        </SessionProvider>
    );
}