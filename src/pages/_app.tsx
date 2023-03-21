import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { locales, Themes } from "../common/constants";
import Head from "next/head";
import appSettings from "../common/app-settings";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
    const { i18n } = useTranslation();
    const pathLanguage = i18n.language === locales.vi ? "/vi" : "";
    const router = useRouter();
    return (
        <ThemeProvider attribute="class" defaultTheme={Themes.infoSite} enableSystem={false} storageKey="info-site-mode">
            <Head>
                <title>SABA.games - Online Casino Platform Provider</title>
                <meta name="robots" content="all" />
                <link rel="canonical" href={`${appSettings.externalUrl}${pathLanguage}${router.asPath}`} />
                <link rel="preload" href="/static/fonts/SF-Pro-Display-Regular.otf" as="font" type="font/otf" crossOrigin=""></link>
                <link rel="preload" href="/static/fonts/SF-Pro-Display-Semibold.otf" as="font" type="font/otf" crossOrigin=""></link>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(App);
