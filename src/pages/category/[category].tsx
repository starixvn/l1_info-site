import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Data from "../../components/data";
import Category from "../../components/pages/category";
import { GameCategoryRouter, locales } from "../../common/constants";
import { TPropsBase } from "../../components/pageBase";
import { GameCategory, IStaticProps } from "../../components/type";
import { getKeyByValue } from "../../helpers/function-helper";

interface IParamsData {
    category: string;
}

export const Categories = (props: TPropsBase) => {
    return <Category {...props} />;
};

export const getStaticPaths = async (props: any) => {
    const handlePaths = () => {
        let paths: any = [];
        Object.values(locales).forEach((locale) => {
            paths = [...paths, ...Object.values(GameCategoryRouter).map((name) => ({ params: { category: name }, locale }))];
        });
        return paths;
    };
    const paths = handlePaths();
    return { paths, fallback: false };
};

export const getStaticProps = async (context: IStaticProps<IParamsData>) => {
    const { params } = context;
    const locale = context.locale || "en";

    console.log("static props", locale);
    const handleGameData = () => {
        if (params.category === GameCategoryRouter[GameCategory.AllGames]) {
            return Data;
        }
        return Data.filter((game) => GameCategoryRouter[game.gameCategory] === params.category);
    };
    const gameData = handleGameData();
    const category = +getKeyByValue(GameCategoryRouter, params.category);
    return {
        props: {
            gameData,
            category,
            ...(await serverSideTranslations(locale, ["common", "detail"])),
        },
    };
};

export default Categories;
