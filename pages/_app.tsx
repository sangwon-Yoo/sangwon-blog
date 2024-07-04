import type { AppProps } from 'next/app'
import { GlobalStyle } from "@/design-system/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { YooBlogTheme } from "@/design-system/themes";
import { SessionProvider } from "next-auth/react";
import useInitHljs from "@/hook/useInitHljs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function MyApp({ Component, pageProps }: AppProps) {

    useInitHljs();
    const queryClient = new QueryClient();

    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={YooBlogTheme}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </QueryClientProvider>
        </SessionProvider>
    );
}