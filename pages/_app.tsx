import type { AppProps } from 'next/app'
import { GlobalStyle } from "@/design-system/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { YooBlogTheme } from "@/design-system/themes";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <ThemeProvider theme={YooBlogTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
}