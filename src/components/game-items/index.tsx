import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { GameCategoryName, GameTypeName, TagsName } from "../../common/constants";
import { IGame } from "../data";
import { LanguageIcons } from "../icon";
import Loader from "../loader";
import Styles from "./game-item.module.scss";
import PlayForFunButton from "../play-for-fun-button";
import { useGameContext } from "../../contexts/game-context";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";

type TGameItems = {
    game: IGame[];
    category: number;
};

const classDetailIcon = "detail-icon";
const classDetailItem = "detail-item";
const NUMBER_ROWS_DISPLAY = 5;
let totalBatch = 0;

const GameIcon = dynamic(() => import("../game-icon"), {
    loading: () => <Loader />,
});

const getGame = (games: IGame[], pageSize: number, pageNumber: number) => {
    return games.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export const GameItems: React.FC<TGameItems> = ({ game, category }) => {
    const { isFetchingGame } = useGameContext();
    const router = useRouter();
    const { t, i18n } = useTranslation(["common", "detail"]);
    const [batch, setBatch] = useState<number>(1);
    const [batchGame, getBatchGame] = useState<IGame[]>([]);

    const openDetail = (game: IGame) => {
        router.push(`/category/${GameCategoryName[game.gameCategory]}/${game.gameId}`);
    };

    const getGameFollowBatch = () => {
        const getData = getGame(game, NUMBER_ROWS_DISPLAY, batch);
        getBatchGame([...batchGame, ...getData]);
        if (batch === 1) {
            totalBatch = Math.ceil(game.length / NUMBER_ROWS_DISPLAY);
        }
    };

    useEffect(() => {
        setBatch(1);
        getBatchGame([]);
    }, [category]);

    useEffect(() => {
        if (isFetchingGame && batch + 1 <= totalBatch) {
            setBatch(batch + 1);
        }
    }, [isFetchingGame]);

    useEffect(() => {
        getGameFollowBatch();
    }, [batch]);

    useEffect(() => {
        batchGame?.length === 0 && getGameFollowBatch();
    }, [batchGame]);

    return (
        <section className="container">
            {batchGame &&
                batchGame.map((game: IGame) => {
                    return (
                        <div className={Styles["game-container"]} key={uuidv4()}>
                            <div className={Styles["game-name"]} onClick={() => openDetail(game)}>
                                {t<string>(`detail:${game.gameId}.displayedName`)}
                            </div>
                            <div className={Styles["game-play"]}>
                            <GameIcon
                                gameId={game.gameId}
                                game={game}
                                isSmallSize={false}
                                isNew={game.isNew}
                                openDetail={openDetail}
                                isLink={true}
                            />
                                <PlayForFunButton gameId={game.gameId} />
                            </div>
                            <div className={Styles["game-detail"]}>
                                <div className={Styles["game-intro"]} onClick={() => openDetail(game)}>
                                    {t<string>(`detail:${game.gameId}.detail`)}
                                </div>
                                <a
                                    href={`/${i18n.language}/guide?gameId=${game.gameId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${Styles[classDetailItem]} ${Styles["guide"]}`}
                                >
                                    <span className={`${Styles[classDetailIcon]} icon-info`}></span>
                                    <span className={Styles["text-guide"]}>{t<string>("common:game-rules")}</span>
                                </a>
                                <div className={Styles["detail-group"]}>
                                    <div className={Styles[classDetailItem]}>
                                        <span className={`${Styles[classDetailIcon]} icon-type`}></span>
                                        <span>
                                            {t<string>("common:game-type")}:{" "}
                                            <strong>{t<string>(`common:gameType-${GameTypeName[game.gameType]}`)}</strong>
                                        </span>
                                    </div>
                                    <div className={Styles[classDetailItem]}>
                                        <span className={`${Styles[classDetailIcon]} icon-rtp`}></span>
                                        <span>
                                            {t<string>("common:rtp")}: <strong>{game.rtp}%</strong>
                                        </span>
                                    </div>
                                    <div className={Styles[classDetailItem]}>
                                        <span className={`${Styles[classDetailIcon]} icon-tag`}></span>
                                        <span>
                                            {t<string>("common:tag")}: <strong>{t<string>(`common:tag-${TagsName[game.tag]}`)}</strong>
                                        </span>
                                    </div>
                                </div>
                                <div className={Styles[classDetailItem]}>
                                    <span className={`${Styles[classDetailIcon]} icon-language`}></span>
                                    <span>{t<string>("common:language")}: </span>
                                    <LanguageIcons />
                                </div>
                            </div>
                        </div>
                    );
                })}
        </section>
    );
};

export default GameItems;
