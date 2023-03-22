import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Image from "next/image";

import { GameTypeName, GameVolatility, TagsName } from "../../../common/constants";
import { IGame } from "../../data";
import Styles from "./game-detail.module.scss";

const GameIcon = dynamic(() => import("../../game-icon"));
const SimilarGames = dynamic(() => import("../../similar-games"));
const PlayForFunButton = dynamic(() => import("../../play-for-fun-button"));
const LanguageIcons = dynamic(() => import("../../icon"));

type TGameDetails = {
    game: IGame;
    gamesSimilar: IGame[] | undefined;
};

const detailIconClass = "detail-item-icon";
const DetailIcon: React.FC<{ icon: string; text: string; subpath?: string; format?: string }> = ({
    icon,
    text,
    subpath = "compatibility",
    format = "svg",
}) => {
    return (
        <span className={Styles["group-icon"]}>
            <div style={{ height: 32, width: 32, position: "relative" }}>
                <Image className="icon-bg" src={`/static/images/${subpath}/${icon}.${format}`} alt={icon} loading="lazy" fill />
            </div>
            {text}
        </span>
    );
};

const GameDetails: React.FC<TGameDetails> = ({ game, gamesSimilar }) => {
    const router = useRouter();
    const { t } = useTranslation(["common", "detail"]);
    const currentLang = router.locale !== "vi" ? `_${router.locale}` : "";
    const gameDetail = t<string>(`detail:${game.gameId}.detail`);

    useEffect(() => {
        const handleRouteChange = () => {
            const element = document.getElementById("header");
            element && element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [game]);

    return (
        <div id="container-game-detail">
            <section className="container list-container">
                <h1 className="d-none">
                    {t<string>(`detail:${game.gameId}.displayedName`)} - SABA.games - Online Casino Platform Provider
                </h1>
                <div className={Styles["game-detail-top"]}>
                    <h2 className={Styles["game-name"]}>{t<string>(`detail:${game.gameId}.displayedName`)}</h2>
                    <div className={Styles["game-icon-container"]}>
                        <GameIcon gameId={game.gameId} isSmallSize={false} isNew={game.isNew} />
                    </div>
                    <PlayForFunButton gameId={game.gameId} />
                    <div className={Styles["game-intro"]}>
                        <div className={Styles["intro"]}>
                            <p dangerouslySetInnerHTML={{ __html: gameDetail }}></p>
                        </div>
                    </div>
                </div>
                <div className={Styles["flex-detail"]}>
                    <div className={Styles["game-detail-bottom"]}>
                        <div className={Styles["detail-group"]}>
                            <div className={Styles["detail-item-text"]}>
                                <span>
                                    {t<string>("common:game-type")}:{" "}
                                    <span className="color-primary">{t<string>(`common:gameType-${GameTypeName[game.gameType]}`)}</span>
                                </span>
                            </div>
                            <div className={Styles["detail-item"]}>
                                <span>
                                    {t<string>("common:rtp")}: <span className="color-primary">{game.rtp}%</span>
                                </span>
                            </div>
                            <div className={Styles["detail-item-text"]}>
                                <span>
                                    {t<string>("common:tag")}:{" "}
                                    <span className="color-primary">{t<string>(`common:tag-${TagsName[game.tag]}`)}</span>
                                </span>
                            </div>

                            {game.volatility !== null && (
                                <div className={Styles["detail-item"]}>
                                    {t<string>("common:volatility")}:{" "}
                                    <span className="color-primary">{t<string>(`common:tag-${GameVolatility[game.volatility]}`)}</span>
                                </div>
                            )}
                        </div>

                        <div className={Styles[detailIconClass]}>
                            <p>{t<string>("common:browser")}</p>
                            <DetailIcon text="Google Chrome" icon="icon-chrome" />
                            <DetailIcon text="Safari" icon="icon-safari" />
                            <DetailIcon text="Cốc Cốc" icon="icon-coccoc" />
                        </div>

                        <div className={Styles[detailIconClass]}>
                            <p>{t<string>("common:compatible")}</p>
                            <DetailIcon text="iOS" icon="icon-ios" />
                            <DetailIcon text="Android" icon="icon-android" />
                            <DetailIcon text="Window" icon="icon-window" />
                            <DetailIcon text="Mac OS" icon="icon-macos" />
                        </div>

                        <div className={Styles[detailIconClass]}>
                            <p>{t<string>("common:language")} </p>
                            <LanguageIcons />
                        </div>
                    </div>
                    {game.isBanner && (
                        <div className={Styles["play-for-fun"]}>
                            <Image
                                className={Styles["banner-game"]}
                                src={`/static/images/game-banner/banner_${game.gameId}${currentLang}.png`}
                                alt="game-icon"
                                loading="lazy"
                                height={414}
                                width={214}
                            />
                            <PlayForFunButton gameId={game.gameId} />
                        </div>
                    )}
                </div>
                <SimilarGames games={gamesSimilar ?? []} t={t} />
            </section>
        </div>
    );
};

export default React.memo(GameDetails);
