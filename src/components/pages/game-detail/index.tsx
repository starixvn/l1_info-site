import React from "react";
import { useTranslation } from "next-i18next";
import { GameTypeName, TagsName } from "../../../common/constants";
import { IGame } from "../../data";
import GameIcon from "../../game-icon";
import { LanguageIcons } from "../../icon";
import SimilarGames from "../../similar-games";
import Styles from "./game-detail.module.scss";
import { useRouter } from "next/router";

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
            <img className="icon-bg" src={`/static/images/${subpath}/${icon}.${format}?v=1`} alt={icon}></img>
            {text}
        </span>
    );
};

const GameDetails: React.FC<TGameDetails> = ({ game, gamesSimilar }) => {
    const router = useRouter();
    const { t } = useTranslation(["common", "detail"]);
    const currentLang = router.locale !== "vi" ? `_${router.locale}` : "";

    return (
        <>
            <section className="container list-container">
                <div className={Styles["game-detail-top"]}>
                    <div className={Styles["game-name"]}> {t<string>(`detail:${game.gameId}.displayedName`)}</div>
                    <div className={Styles["game-icon-container"]}>
                        <GameIcon gameId={game.gameId} isSmallSize={false} isNew={game.isNew} />
                    </div>

                    <button type="button" className="btn btn-primary">
                        {t<string>("common:playForFun")}
                    </button>
                    <div className={Styles["game-intro"]}>
                        <div className={Styles["intro"]}>{t<string>(`detail:${game.gameId}.detail`)}</div>
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
                        </div>
                        <div className={Styles["detail-item"]}>
                            <span>
                                {t<string>("common:tag")}:{" "}
                                <span className="color-primary">{t<string>(`common:tag-${TagsName[game.tag]}`)}</span>
                            </span>
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
                            <img
                                className={Styles["banner-game"]}
                                src={`/static/images/game-banner/banner_${game.gameId}${currentLang}.png`}
                                alt="game-icon"
                            ></img>
                            <button type="button" className="btn btn-primary">
                                {t<string>("common:playForFun")}
                            </button>
                        </div>
                    )}
                </div>
                <SimilarGames games={gamesSimilar ?? []} t={t} />
            </section>
        </>
    );
};

export default React.memo(GameDetails);
