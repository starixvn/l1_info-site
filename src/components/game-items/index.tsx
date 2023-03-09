import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { GameCategoryName, GameTypeName, TagsName } from "../../common/constants";
import { IGame } from "../data";
import { LanguageIcons } from "../icon";
import GameIcon from "../game-icon";
import Styles from "./game-item.module.scss";
import PlayForFunButton from "../play-for-fun-button";
import * as _ from "lodash";

type TGameItems = {
    game: IGame[];
    updateGameData?: () => void;
};

const classDetailIcon = "detail-icon";
const classDetailItem = "detail-item";

export const GameItems: React.FC<TGameItems> = ({ game }) => {
    const router = useRouter();
    const { t, i18n } = useTranslation(["common", "detail"]);
    const [playerId] = useState(_.random(1, 10000000));

    const openDetail = (game: IGame) => {
        router.push(`/category/${GameCategoryName[game.gameCategory]}/${game.gameId}`);
    };

    return (
        <section className="container">
            {game.map((game: IGame) => {
                return (
                    <div className={Styles["game-container"]} key={game.gameId}>
                        <div className={Styles["game-name"]} onClick={() => openDetail(game)}>
                            {t<string>(`detail:${game.gameId}.displayedName`)}
                        </div>
                        <div className={Styles["game-play"]}>
                            <GameIcon gameId={game.gameId} game={game} isSmallSize={false} isNew={game.isNew} openDetail={openDetail} />
                            <PlayForFunButton gameId={game.gameId} playerId={playerId} />
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
