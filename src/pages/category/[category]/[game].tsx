import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";

import { GAMES_CATEGORY, locales } from "../../../common/constants";
import Data from "../../../components/data";
import PageBase, { IStateBase, TPropsBase } from "../../../components/pageBase";
import GameDetails from "../../../components/pages/game-detail";
import { IStaticProps } from "../../../components/type";

interface IParamsData {
    category: string;
    game: string;
}

class DetailGame extends PageBase<TPropsBase, IStateBase> {
    constructor(props: TPropsBase) {
        super(props);
    }

    renderContent() {
        const { gameData, gameIdsSimilar } = this.props;
        return <GameDetails game={gameData[0]} gameIdsSimilar={gameIdsSimilar} />;
    }
}

const getStaticPaths: GetStaticPaths = async () => {
    const games = GAMES_CATEGORY.map((game) => Object.entries(game)[0]);
    const paths = Object.values(locales).flatMap((locale) =>
        games.map(([category, game]) => ({
            params: { category, game },
            locale,
        }))
    );

    return { paths, fallback: false };
};

const getStaticProps = async ({ params, locale = "en" }: IStaticProps<IParamsData>) => {
    const { game } = params;
    const DataSort = Data.sort((a, b) => a.gameId - b.gameId);
    const gameData = DataSort.find((data) => data.gameName === game);

    if (!gameData) {
        return {
            notFound: true,
        };
    }

    const gameIdsSimilar = DataSort.filter((data) => data.gameCategory === gameData.gameCategory && data.gameId !== gameData.gameId).map(
        (game) => game.gameId
    );

    return {
        props: {
            gameData: [gameData],
            gameIdsSimilar,
            category: gameData.gameCategory,
            ...(await serverSideTranslations(locale, ["common", "detail"])),
        },
    };
};

export { DetailGame as default, getStaticPaths, getStaticProps };
