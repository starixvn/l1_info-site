import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

import { GAMES_SORT } from "../components/data";
import { EGameCategory } from "../components/type";
import { TPropsBase } from "../components/pageBase";

const Dashboard = dynamic(() => import("../components/pages/dashboard"));

const Home = (props: TPropsBase) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading) {
        return <></>;
    }

    return <Dashboard {...props} />;
};

const getStaticProps = async ({ locale = "en" }) => {
    const translations = await serverSideTranslations(locale, ["common", "detail", "seo"]);
    return { props: { game: GAMES_SORT, category: EGameCategory.AllGames, ...translations } };
};

export { Home as default, getStaticProps };
