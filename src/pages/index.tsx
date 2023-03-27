import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

import { GAMES_SORT } from "../components/data";
import { EGameCategory } from "../components/type";
import { TPropsBase } from "../components/pageBase";
import appSettings from "../common/app-settings";
import AppLandingPageComponent from "../components/app-landing-page";

const Dashboard = dynamic(() => import("../components/pages/dashboard"));

const changeFontFamilyFollowLanguage = (locale: string) => {
    let fontFamily = "";
    switch (locale) {
        case "th":
            fontFamily = "Noto-Thai";
            break;
        case "zh_cn":
            fontFamily = "Noto-ZH-CN";
            break;
        case "zh_tw":
            fontFamily = "Noto-ZH-TW";
            break;
        default:
            fontFamily = "Roboto";
            break;
    }

    document.documentElement.style.fontFamily = fontFamily;
    document.body.style.fontFamily = fontFamily;
};


const Home = (props: TPropsBase) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setIsLoading(false);

            if (!appSettings.isInforSite) {
                changeFontFamilyFollowLanguage(router.query.language as string);
            }
        }
    }, [router]);

    if (isLoading) {
        return <></>;
    }

    return appSettings.isInforSite ? <Dashboard {...props} /> : <AppLandingPageComponent locale={router.query.language as string} />;
};

const getStaticProps = async ({ locale = "en" }) => {
    const translations = await serverSideTranslations(locale, ["common", "detail", "seo"]);
    return { props: { game: GAMES_SORT, category: EGameCategory.AllGames, ...translations } };
};

export { Home as default, getStaticProps };
