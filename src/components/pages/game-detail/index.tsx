import React from "react";

import { buildVersion, GameTypeName, TagsName } from "../../../common/constants";
import { IGameData } from "../../data";
import GameIcon from "../../game-icon";
import SimilarGames from "../../similar-games";
import Styles from "./game-detail.module.scss";

const detailIconClass = "detail-item-icon";

const DetailIcon: React.FC<{ icon: string; text: string; subpath?: string; format?: string }> = ({
    icon,
    text,
    subpath = "compatibility",
    format = "svg",
}) => {
    return (
        <span className={Styles["group-icon"]}>
            <img className="icon-bg" src={`/static/images/${subpath}/${icon}.${format}`} alt={icon}></img>
            {text}
        </span>
    );
};

const GameDetails: React.FC<{ game: IGameData; gameIdsSimilar: number[] | undefined }> = ({ game, gameIdsSimilar }) => {
    return (
        <>
            <section className="container list-container">
                <div className={Styles["game-detail-top"]}>
                    <div className={Styles["game-name"]}>{game?.gameName}</div>
                    <div className={Styles["game-i, con-container"]}>
                        <GameIcon gameId={game.gameId} isSmallSize={false} />
                    </div>

                    <button type="button" className="btn btn-primary">
                        Play for fun
                    </button>
                    <div className={Styles["game-intro"]}>
                        <div className={Styles["intro"]}>{game.intro}</div>
                    </div>
                </div>
                <div className={Styles["flex-detail"]}>
                    <div className={Styles["game-detail-bottom"]}>
                        <div className={Styles["detail-group"]}>
                            <div className={Styles["detail-item-text"]}>
                                <span>
                                    Game Type: <span className="color-primary">{GameTypeName[game.gameType]}</span>
                                </span>
                            </div>
                            <div className={Styles["detail-item"]}>
                                <span>
                                    RTP: <span className="color-primary">{game.rtp}%</span>
                                </span>
                            </div>
                        </div>
                        <div className={Styles["detail-item"]}>
                            <span>
                                Tag: <span className="color-primary">{TagsName[game.tag]}</span>
                            </span>
                        </div>

                        <div className={Styles[detailIconClass]}>
                            <p>Browser Compatibility </p>
                            <DetailIcon text="Google Chrome" icon="icon-chrome" />
                            <DetailIcon text="Safari" icon="icon-safari" />
                            <DetailIcon text="Cốc Cốc" icon="icon-coccoc" />
                        </div>

                        <div className={Styles[detailIconClass]}>
                            <p>Compatible With</p>
                            <DetailIcon text="iOS" icon="icon-ios" />
                            <DetailIcon text="Android" icon="icon-android" />
                            <DetailIcon text="Window" icon="icon-window" />
                            <DetailIcon text="Mac OS" icon="icon-macos" />
                        </div>

                        <div className={Styles[detailIconClass]}>
                            <p>Languages </p>
                            <span className="icon-cn">
                                {["en", "vi", "cn", "th", "id"].map((name) => {
                                    return (
                                        <img
                                            key={name}
                                            className="icon-bg"
                                            src={`/static/images/icon-languages/${name}.svg`}
                                            alt="game-icon"
                                        ></img>
                                    );
                                })}
                            </span>
                        </div>
                    </div>
                    <div className={Styles["play-for-fun"]}>
                        <img
                            className={Styles["banner-game"]}
                            src={`/static/images/game-banner/banner_${game.gameId}.png?v=${buildVersion}`}
                            alt="game-icon"
                        ></img>
                        <button type="button" className="btn btn-primary">
                            Play for fun
                        </button>
                    </div>
                </div>
                <SimilarGames gameIds={gameIdsSimilar ?? []} />
            </section>
        </>
    );
};

export default GameDetails;
