import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Themes } from "../common/constants";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme={Themes.light} enableSystem={false} storageKey="info-site-mode">
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(App);
