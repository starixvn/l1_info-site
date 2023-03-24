import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import { GameTypeName, locales } from "../common/constants";
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
                "@graph":[
                    {
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
                            }
                        ]
                    },
                    {
                        "@type":"Organization",
                        "name":"SABA.games",
                        "url":"https://www.saba.games/",
                        "logo": "https://www.saba.games/static/images/logo.png",
                        "description": "SABA.games is a premium casino platform provider, offering a variety of exclusive online games."
                    }
                ]
          }`,
        };
    };

    const renderGoogleAnalytic = () => {
        if (appSettings.googleAnalyticId == null) {
            return <></>;
        }

        return (
            <>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${appSettings.googleAnalyticId}`}></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${appSettings.googleAnalyticId}', {
                            page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            </>
        );
    };

    return (
        <>
            <Head>
                <meta name="robots" content="all" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                <meta httpEquiv="Pragma" content="no-cache" />
                <meta httpEquiv="Expires" content="-1" />
                <meta name="theme-color" content="transparent" />
                <meta key="og:url" property="og:url" content="https://www.saba.games" />
                <meta key="og:type" property="og:type" content="website" />
                <meta key="og:title" property="og:title" content={t<string>("title_0")} />
                <meta key="og:description" property="og:description" content={t<string>("desc_0")} />
                <meta key="og:image" property="og:image" content="https://www.saba.games/static/images/logo.svg" />
                <meta key="og:image:width" property="og:image:width" content="1200" />
                <meta key="og:image:height" property="og:image:height" content="630" />
                <meta key="og:locale" property="og:locale" content="en_IE" />
                <meta name="google-site-verification" content="MTU60dw0umBebOlilcIBFbkowmxwSeY_z6mAsYtqpwY" />
                <link rel="canonical" href={canonicalUrl} />
                <link rel="preload" href="/static/fonts/SF-Pro-Display-Regular.otf" as="font" crossOrigin="anonymous"></link>
                <link rel="preload" href="/static/fonts/SF-Pro-Display-Semibold.otf" as="font" crossOrigin="anonymous"></link>
                <link rel="apple-touch-icon" href="https://www.saba.games/static/images/logo.png"></link>
                <link rel="shortcut icon" href="https://www.saba.games/favicon.ico" type="image/ico"></link>
                <link rel="icon" href="https://www.saba.games/favicon.ico" type="image/ico"></link>
                <script type="application/ld+json" dangerouslySetInnerHTML={addJSONLD()} />
                {renderGoogleAnalytic()}
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default appWithTranslation(App);
