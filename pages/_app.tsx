import type { AppProps } from 'next/app'
import { GlobalStyle } from "@/design-system/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { YooBlogTheme } from "@/design-system/themes";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={YooBlogTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}