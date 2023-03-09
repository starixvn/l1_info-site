import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Axios from "axios";
import * as _ from "lodash";

import { GameCategoryName, GameTypeName, TagsName } from "../../common/constants";
import { IGame } from "../data";
import { LanguageIcons } from "../icon";
import GameIcon from "../game-icon";
import Styles from "./game-item.module.scss";
import { randomString } from "../../helpers/function-helper";

type TGameItems = {
    game: IGame[];
    updateGameData?: () => void;
};

const classDetailIcon = "detail-icon";
const classDetailItem = "detail-item";
export const GameItems: React.FC<TGameItems> = ({ game }) => {
    const router = useRouter();
    const domain = "https://l1-glbs2.lumigame.com";
    const { t, i18n } = useTranslation(["common", "detail"]);

    const playForFunAction = (event: any, gameId: number) => {
        event && event.preventDefault();
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const request = {
            playerId: _.random(0, 10000000),
            playerName: randomString(characters, 8),
            language: "vi-VN",
            currency: "$US",
            seq: "d,y,lumi",
            siteId: "4100300",
            siteName: "lumi",
            ip: "",
            browserUserAgent: navigator.userAgent,
            auth: {
                operatorId: "ONEworks1",
                operatorSecret: "ONEworks1@20luminet&",
            },
            token: "",
            redirectUrl: "#",
            verifyResult: null,
            gameId: 0,
            setting: {},
            domain: "example.com",
            localhost: false,
            isOpenOnIframe: false,
            appType: 1,
            isCash: true,
            partner: "1W",
            disableJackpotGames: false,
            expandAdvanceSetting: false,
            instantMode: 1,
            devIp: "",
            operatorToken: "ONEworks1Token",
            setDefaultBalance: false,
        };

        Axios.get(domain + "/setting/data").then((data) => (request.setting = data.data));
        Axios.get(domain + "/signin/ip", { timeout: 10000 }).then((data) => (request.ip = data.data));
        Axios.post(domain + "/signin/sso", request)
            .then((data) => data.data)
            .then((data) => (data.error ? Promise.reject(data.error) : data))
            .then((data) => {
                window.open(`${data.redirectUrl}&gameId=${gameId}`);
            })
            .catch();

        event && event.preventDefault();
    };

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
                            <button type="button" className="btn btn-primary" onClick={(event) => playForFunAction(event, game.gameId)}>
                                {t<string>("common:playForFun")}
                            </button>
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
                                <span>{t<string>("common:game-rules")}</span>
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
