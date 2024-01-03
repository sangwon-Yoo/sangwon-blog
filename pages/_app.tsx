import type { AppProps } from 'next/app'
import { GlobalStyle } from "@/design-system/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { YooBlogTheme } from "@/design-system/themes";
import { SessionProvider } from "next-auth/react";
import useInitHljs from "@/hook/useInitHljs";

export default function MyApp({ Component, pageProps }: AppProps) {

    useInitHljs();

    return (
        <SessionProvider>
            <ThemeProvider theme={YooBlogTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
}