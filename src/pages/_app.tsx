import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { GameTypeName, locales, Themes } from "../common/constants";
import Head from "next/head";
import appSettings from "../common/app-settings";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { windowNamePFF } from "../components/play-for-fun-button";
import { EGameType } from "../components/type";

const App = ({ Component, pageProps }: AppProps) => {
    const { i18n } = useTranslation();
    const { t } = useTranslation("seo");
    const router = useRouter();
    const cleanPath = router.asPath.split("#")[0].split("?")[0];
    const subPath = router.asPath === "/" || cleanPath === `/category/${GameTypeName[EGameType.AllGames]}` ? "" : cleanPath;
    const pathLanguage = i18n.language === locales.vi ? "/vi" : "";
    const canonicalUrl = `${appSettings.externalUrl}${pathLanguage}${subPath}`;

    useEffect(() => {
        window.name === windowNamePFF && window.close();
    }, []);

    const addJSONLD = () => {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "SABA.games",
                        "item": "https://www.saba.games/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Dices Games",
                        "item": "https://www.saba.games/category/dices"
                    },
                ],
          }`,
        };
    };

    return (
        <ThemeProvider attribute="class" defaultTheme={Themes.infoSite} enableSystem={false} storageKey="info-site-mode">
            <Head>
                <title key="title">{t<string>("main_title")}</title>
                <meta name="robots" content="all" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="-1" />
                <meta name="theme-color" content="transparent" />
                <meta key="description" name="description" content={t<string>("main_desc")} />
                <meta key="og:url" property="og:url" content="https://www.saba.games" />
                <meta key="og:type" property="og:type" content="website" />
                <meta key="og:title" property="og:title" content={t<string>("main_title")} />
                <meta key="og:description" property="og:description" content={t<string>("main_desc")} />
                <meta key="og:image" property="og:image" content="https://www.saba.games/static/images/logo.svg" />
                <meta key="og:image:width" property="og:image:width" content="1200" />
                <meta key="og:image:height" property="og:image:height" content="630" />
                <meta key="og:locale" property="og:locale" content="en_IE" />
                <link rel="canonical" href={canonicalUrl} />
                <link rel="preload" href="/static/fonts/SF-Pro-Display-Regular.otf" as="font" crossOrigin="anonymous"></link>
                <link rel="preload" href="/static/fonts/SF-Pro-Display-Semibold.otf" as="font" crossOrigin="anonymous"></link>
                <script type="application/ld+json" dangerouslySetInnerHTML={addJSONLD()} />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(App);
