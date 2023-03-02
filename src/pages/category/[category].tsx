import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";

import Data from "../../components/data";
import Category from "../../components/pages/category";
import { GameCategoryRouter, locales } from "../../common/constants";
import { TPropsBase } from "../../components/pageBase";
import { GameCategory, IStaticProps } from "../../components/type";
import { getKeyByValue } from "../../helpers/function-helper";

interface IParamsData {
    category: string;
}

const Categories = (props: TPropsBase) => {
    return <Category {...props} />;
};

const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.values(locales).flatMap((locale) =>
        Object.values(GameCategoryRouter).map((category) => ({ params: { category }, locale }))
    );
    return { paths, fallback: false };
};

const getStaticProps = async ({ params, locale = "en" }: IStaticProps<IParamsData>) => {
    const DataSort = Data.sort((a, b) => a.gameId - b.gameId);
    const gameData =
        params.category === GameCategoryRouter[GameCategory.AllGames]
            ? DataSort
            : DataSort.filter((game) => GameCategoryRouter[game.gameCategory] === params.category);

    const category = +getKeyByValue(GameCategoryRouter, params.category);
    const translations = await serverSideTranslations(locale, ["common", "detail"]);
    return { props: { gameData, category, ...translations } };
};

export { Categories as default, getStaticPaths, getStaticProps };
