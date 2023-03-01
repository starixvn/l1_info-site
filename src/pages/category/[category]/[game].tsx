import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { GAMES_CATEGORY, locales } from "../../../common/constants";
import Data from "../../../components/data";
import PageBase, { IStateBase, TPropsBase } from "../../../components/pageBase";
import GameDetails from "../../../components/pages/game-detail";
import { IStaticProps } from "../../../components/type";

interface IParamsData {
    category: string;
    game: string;
}

export const getStaticPaths = async () => {
    const handlePaths = () => {
        let paths: any = [];
        Object.values(locales).forEach((locale) => {
            paths = [
                ...paths,
                ...GAMES_CATEGORY.map((game) => ({
                    params: { category: Object.keys(game)[0], game: Object.values(game)[0] },
                    locale,
                })),
            ];
        });
        return paths;
    };
    const paths = handlePaths();

    console.log(paths);

    // const paths = GAMES_CATEGORY.map((game) => ({ params: { category: Object.keys(game)[0], game: Object.values(game)[0] } }));

    return { paths, fallback: false };
};

export const getStaticProps = async (props: IStaticProps<IParamsData>) => {
    const { params } = props;
    const { game } = params;
    const locale = props.locale || "en";

    const gameData = Data.filter((data) => data.gameName === game);
    const gameIdsSimilar = Data.filter((data) => data.gameCategory === gameData[0].gameCategory && gameData[0].gameId !== data.gameId).map(
        (game) => game.gameId
    );
    const category = gameData[0].gameCategory;

    return {
        props: {
            gameData,
            gameIdsSimilar,
            category,
            ...(await serverSideTranslations(locale, ["common", "detail"])),
        },
    };
};

export default class DetailGame extends PageBase<TPropsBase, IStateBase> {
    constructor(props: TPropsBase) {
        super(props);
    }

    renderContent() {
        const { gameData, gameIdsSimilar } = this.props;
        return <GameDetails game={gameData[0]} gameIdsSimilar={gameIdsSimilar} />;
    }
}
