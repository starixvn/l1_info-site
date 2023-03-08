import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";

import { locales } from "../../../common/constants";
import { GAMES_CATEGORY, GAMES_SORT } from "../../../components/data";
import PageBase, { IStateBase, TPropsBase } from "../../../components/pageBase";
import GameDetails from "../../../components/pages/game-detail";
import { IStaticProps } from "../../../components/type";

interface IParamsData {
    category: string;
    gameId: string;
}

class DetailGame extends PageBase<TPropsBase, IStateBase> {
    constructor(props: TPropsBase) {
        super(props);
    }

    renderContent() {
        const { game, gameIdsSimilar } = this.props;
        return <GameDetails game={game[0]} gameIdsSimilar={gameIdsSimilar} />;
    }
}

const getStaticPaths: GetStaticPaths = async () => {
    const games = GAMES_CATEGORY.map((game) => Object.entries(game)[0]);
    const paths = Object.values(locales).flatMap((locale) =>
        games.map(([category, gameId]) => ({
            params: { category, gameId: gameId.toString() },
            locale,
        }))
    );

    return { paths, fallback: false };
};

const getStaticProps = async ({ params, locale = "en" }: IStaticProps<IParamsData>) => {
    const { gameId } = params;
    const game = GAMES_SORT.find((data) => data.gameId === +gameId);
    if (!game) {
        return {
            notFound: true,
        };
    }

    const gameIdsSimilar = GAMES_SORT.filter((data) => data.gameCategory === game.gameCategory && data.gameId !== game.gameId).map(
        (game) => game.gameId
    );

    return {
        props: {
            game: [game],
            gameIdsSimilar,
            category: game.gameCategory,
            ...(await serverSideTranslations(locale, ["common", "detail"])),
        },
    };
};

export { DetailGame as default, getStaticPaths, getStaticProps };
