import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";
import dynamic from "next/dynamic";

import { GAMES_SORT } from "../../components/data";
import { GameCategoryName, locales } from "../../common/constants";
import { TPropsBase } from "../../components/pageBase";
import { EGameCategory, IStaticProps } from "../../components/type";
import { getKeyByValue } from "../../helpers/function-helper";
import Head from "next/head";
import appSettings from "../../common/app-settings";

const Category = dynamic(() => import("../../components/pages/category"));

interface IParamsData {
    category: string;
}

const Categories = (props: TPropsBase) => {
    if (props.category === EGameCategory.AllGames) {
        return (
            <>
                <Head>
                    <link rel="canonical" href={appSettings.externalUrl} />
                </Head>
                <Category {...props} />
            </>
        );
    }
    return <Category {...props} />;
};

const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.values(locales).flatMap((locale) =>
        Object.values(GameCategoryName).map((category) => ({ params: { category }, locale }))
    );
    return { paths, fallback: false };
};

const getStaticProps = async ({ params, locale = "en" }: IStaticProps<IParamsData>) => {
    const game =
        params.category === GameCategoryName[EGameCategory.AllGames]
            ? GAMES_SORT
            : GAMES_SORT.filter((game) => GameCategoryName[game.gameCategory] === params.category);

    const category = +getKeyByValue(GameCategoryName, params.category);
    const translations = await serverSideTranslations(locale, ["common", "detail"]);
    return { props: { game, category, ...translations } };
};

export { Categories as default, getStaticPaths, getStaticProps };
