import React from "react";
import { buildVersion } from "../../common/constants";
import Styles from "./game-item.module.scss";
import { GameInfo } from "./type";

export const GameItem: React.FC<{ gameData: any }> = (item) => {
    return (
        <section className="container list-container">
            {item.gameData.map((game: GameInfo) => {
                return (
                    <div className={Styles["game-container"]} key={game.gameId}>
                        <div className={Styles["game-name"]}>{game.name}</div>
                        <div className={Styles["game-play"]}>
                            <div className={Styles["game-icon"]}>
                                <img
                                    className="icon-bg"
                                    src={`/static/images/game-icon/icon-bg-${game.gameId}.png?v=${buildVersion}`}
                                    alt="game-icon"
                                ></img>
                                <img
                                    className={Styles["icon-name"]}
                                    src={`/static/images/game-icon/icon-name-${game.gameId}.png?v=${buildVersion}`}
                                    alt="game-icon"
                                ></img>
                                {game.isNew ? <div className={Styles["game-tag"]}>New</div> : <></>}
                            </div>
                            <button type="button" className="btn btn-primary">
                                Play for fun
                            </button>
                        </div>
                        <div className={Styles["game-detail"]}>
                            <div className={Styles["game-intro"]}>{game.intro}</div>
                            <div className={Styles["detail-item"]}>
                                <span className={`${Styles["detail-icon"]} icon-info`}></span>
                                <span>Game Rules</span>
                            </div>
                            <div className={Styles["detail-group"]}>
                                <div className={Styles["detail-item"]}>
                                    <span className={`${Styles["detail-icon"]} icon-type`}></span>
                                    <span>
                                        Game Type: <strong>{game.gameType}</strong>
                                    </span>
                                </div>
                                <div className={Styles["detail-item"]}>
                                    <span className={`${Styles["detail-icon"]} icon-rtp`}></span>
                                    <span>
                                        RTP: <strong>{game.rtp}</strong>
                                    </span>
                                </div>
                                <div className={Styles["detail-item"]}>
                                    <span className={`${Styles["detail-icon"]} icon-tag`}></span>
                                    <span>
                                        Tag: <strong>{game.tag}</strong>
                                    </span>
                                </div>
                            </div>
                            <div className={Styles["detail-item"]}>
                                <span className={`${Styles["detail-icon"]} icon-language`}></span>
                                <span>Languages: </span>
                                <span className="icon-cn">
                                    <img className="icon-bg" src="/static/images/icon-languages/en.svg" alt="game-icon"></img>
                                    <img className="icon-bg" src="/static/images/icon-languages/vi.svg" alt="game-icon"></img>
                                    <img className="icon-bg" src="/static/images/icon-languages/cn.svg" alt="game-icon"></img>
                                    <img className="icon-bg" src="/static/images/icon-languages/th.svg" alt="game-icon"></img>
                                    <img className="icon-bg" src="/static/images/icon-languages/id.svg" alt="game-icon"></img>
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
export default GameItem;
