import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Themes } from "../common/constants";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme={Themes.infoSite} enableSystem={false} storageKey="info-site-mode">
            <Head>
                <title>Saba Info Site</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(App);
