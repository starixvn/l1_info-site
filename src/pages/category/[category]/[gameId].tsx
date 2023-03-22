import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";
import dynamic from "next/dynamic";

import { locales } from "../../../common/constants";
import { GAMES_CATEGORY, GAMES_SORT } from "../../../components/data";
import PageBase, { IStateBase, TPropsBase } from "../../../components/pageBase";
import { IStaticProps } from "../../../components/type";
import { withTranslation } from "next-i18next";

const GameDetails = dynamic(() => import("../../../components/pages/game-detail"));

interface IParamsData {
    category: string;
    gameId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const games = GAMES_CATEGORY.map((game) => Object.entries(game)[0]);
    const paths = Object.values(locales).flatMap((locale) =>
        games.map(([category, gameId]) => ({
            params: { category, gameId: gameId.toString() },
            locale,
        }))
    );

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params, locale = "en" }: IStaticProps<IParamsData>) => {
    const { gameId } = params;
    const game = GAMES_SORT.find((data) => data.gameId === +gameId);
    if (!game) {
        return {
            notFound: true,
        };
    }

    const gamesSimilar = GAMES_SORT.filter((data) => data.gameCategory === game.gameCategory && data.gameId !== game.gameId).map(
        (game) => game
    );

    return {
        props: {
            game: [game],
            gamesSimilar,
            category: game.gameCategory,
            ...(await serverSideTranslations(locale, ["common", "detail", "seo"])),
        },
    };
};

class DetailGame extends PageBase<TPropsBase, IStateBase> {
    constructor(props: TPropsBase) {
        super(props);
    }

    renderContent() {
        const { game, gamesSimilar } = this.props;

        return <GameDetails game={game[0]} gamesSimilar={gamesSimilar} />;
    }
}

export default withTranslation()(DetailGame);
