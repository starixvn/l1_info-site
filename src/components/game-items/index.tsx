import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Link from "next/link";

import { GameCategoryName, GameTypeName, TagsName } from "../../common/constants";
import { IGame } from "../data";
import Styles from "./game-item.module.scss";
import { useGameContext } from "../../contexts/game-context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameIcon = dynamic(() => import("../game-icon"));
const LanguageIcons = dynamic(() => import("../icon"));
const PlayForFunButton = dynamic(() => import("../play-for-fun-button"));

type TGameItems = {
    game: IGame[];
    category: number;
};

const classDetailIcon = "detail-icon";
const classDetailItem = "detail-item";
const NUMBER_ROWS_DISPLAY = 5;
let totalBatch = 0;

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
        const handleRouteChange = () => {
            const element = document.getElementById("header");
            element && element.scrollIntoView(true);
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
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

    return useMemo(() => {
        return (
            <section className="container">
                {batchGame &&
                    batchGame.map((game: IGame) => {
                        const gameDetail = t<string>(`detail:${game.gameId}.detail`);
                        return (
                            <div className={Styles["game-container"]} key={game.gameId}>
                                <h2 className={Styles["game-name"]} onClick={() => openDetail(game)}>
                                    {t<string>(`detail:${game.gameId}.displayedName`) || <Skeleton />}
                                </h2>
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
                                        <p dangerouslySetInnerHTML={{ __html: gameDetail }}></p>
                                    </div>
                                    <Link
                                        href={`/${i18n.language}/guide?gameId=${game.gameId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${Styles[classDetailItem]} ${Styles["guide"]}`}
                                    >
                                        <span className={`${Styles[classDetailIcon]} icon-info`}></span>
                                        <h3 className={Styles["text-guide"]}>{t<string>("common:game-rules")}</h3>
                                    </Link>
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
    }, [batchGame, i18n.language, router.locale]);
};

export default GameItems;
