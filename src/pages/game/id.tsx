import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { buildVersion } from "../../common/constants";
import Footer from "../../components/footer";
import { GameBanner } from "../../components/game-banner";
import Styles from "./game-detail.module.scss";
import Data from "../../components/data";
import SimilarGames from "../../components/similar-games";
import GameIcon from "../../components/game-icon";

const GameDetails = () => {
    const game = Data[2];
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={wrapperRef} id="container-home" className="container-home">
            <div className="main-content">
                <GameBanner />
            </div>
            <section className="container list-container">
                <div className={Styles["game-detail-top"]}>
                    <div className={Styles["game-name"]}>{game.displayedName}</div>

                    <div className={Styles["game-icon-container"]}>
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
                                    Game Type: <span className="color-primary">{game.gameType}</span>
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
                                Tag: <span className="color-primary">{game.tag}</span>
                            </span>
                        </div>
                        <div className={Styles["detail-item-icon"]}>
                            <p>Browser Compatibility </p>
                            <span className={Styles["group-icon"]}>
                                <img className="icon-bg" src="/static/images/compatibility/icon-chrome.svg" alt="game-icon"></img>
                                Google Chrome
                            </span>
                            <span className={Styles["group-icon"]}>
                                <img className="icon-bg" src="/static/images/compatibility/icon-safari.svg" alt="game-icon"></img>
                                Safari
                            </span>
                            <span className={Styles["group-icon"]}>
                                <img className="icon-bg" src="/static/images/compatibility/icon-coccoc.svg" alt="game-icon"></img>
                                Cốc Cốc
                            </span>
                        </div>
                        <div className={Styles["detail-item-icon"]}>
                            <p>Compatible With</p>
                            <span className={Styles["group-icon"]}>
                                <img className="icon-bg" src="/static/images/compatibility/icon-ios.svg" alt="game-icon"></img>
                                iOS
                            </span>
                            <span className={Styles["group-icon"]}>
                                <img className="icon-bg" src="/static/images/compatibility/icon-android.svg" alt="game-icon"></img>
                                Android
                            </span>
                            <span className={Styles["group-icon"]}>
                                <img className="icon-bg" src="/static/images/compatibility/icon-window.svg" alt="game-icon"></img>
                                Window
                            </span>
                            <span className={Styles["group-icon"]}>
                                <img className="icon-bg" src="/static/images/compatibility/icon-macos.svg" alt="game-icon"></img>
                                Mac OS
                            </span>
                        </div>
                        <div className={Styles["detail-item-icon"]}>
                            <p>Languages </p>
                            <span className="icon-cn">
                                <img className="icon-bg" src="/static/images/icon-languages/en.svg" alt="game-icon"></img>
                                <img className="icon-bg" src="/static/images/icon-languages/vi.svg" alt="game-icon"></img>
                                <img className="icon-bg" src="/static/images/icon-languages/cn.svg" alt="game-icon"></img>
                                <img className="icon-bg" src="/static/images/icon-languages/th.svg" alt="game-icon"></img>
                                <img className="icon-bg" src="/static/images/icon-languages/id.svg" alt="game-icon"></img>
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
                <SimilarGames />
            </section>
            <Footer />
        </div>
    );
};
export default GameDetails;
