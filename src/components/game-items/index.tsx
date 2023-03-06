import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Axios from "axios";

import { GameCategoryName, GameTypeName, TagsName, GAME_ID_MAPPING_ROUTER } from "../../common/constants";
import { IGameData } from "../data";
import { LanguageIcons } from "../icon";
import GameIcon from "../game-icon";
import Styles from "./game-item.module.scss";
import Link from "next/link";

export function randomString(length: number) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

type TGameItems = {
    gameData: IGameData[];
    updateGameData?: () => void;
};

export const GameItems: React.FC<TGameItems> = ({ gameData }) => {
    const router = useRouter();
    const [domain, setDomain] = useState("https://l1-glbs2.lumigame.com");
    const [token, settoken] = useState("");
    const { t, i18n } = useTranslation(["common", "detail"]);

    const playForFunAction = (event: any, gameId: number) => {
        event && event.preventDefault();

        // const { username, setting, ip } = this.state;
        // if (!username) {
        //     alert("Username are required")
        //     return;
        // }

        let request = {
            playerId: (Math.random() * 10000000) >> 0,
            playerName: randomString(8),
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
                window.open(data.redirectUrl + "&gameId=${gameId}`");
                // settoken(token);
                // window.open(`${domain}?token=${data.token}&lang=vi-VN&gameId=${gameId}`);
            })
            .catch();

        event && event.preventDefault();
    };

    const openDetail = (game: IGameData) => {
        router.push(`/category/${GameCategoryName[game.gameCategory]}/${GAME_ID_MAPPING_ROUTER[game.gameId]}`);
    };

    return (
        <section className="container">
            {gameData.map((gameData: IGameData) => {
                const gameName = gameData.gameName.replace(/\s/g, "").toLowerCase();
                return (
                    <div className={Styles["game-container"]} key={gameData.gameId}>
                        <div className={Styles["game-name"]} onClick={() => openDetail(gameData)}>
                            {t<string>(`detail:${gameName}.displayedName`)}
                        </div>
                        <div className={Styles["game-play"]}>
                            <GameIcon
                                gameId={gameData.gameId}
                                gameData={gameData}
                                isSmallSize={false}
                                isNew={gameData.isNew}
                                openDetail={openDetail}
                            />
                            <button type="button" className="btn btn-primary" onClick={(event) => playForFunAction(event, gameData.gameId)}>
                                {t<string>("common:playForFun")}
                            </button>
                        </div>
                        <div className={Styles["game-detail"]}>
                            <div className={Styles["game-intro"]} onClick={() => openDetail(gameData)}>
                                {t<string>(`detail:${gameName}.detail`)}
                            </div>
                            <div className={`${Styles["detail-item"]} ${Styles["guide"]}`}>
                                <a
                                    href={`/${i18n.language}/game-guide?gameId=${gameData.gameId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className={`${Styles["detail-icon"]} icon-info`}></span>
                                    <span>{t("common:game-rules")}</span>
                                </a>
                            </div>
                            <div className={Styles["detail-group"]}>
                                <div className={Styles["detail-item"]}>
                                    <span className={`${Styles["detail-icon"]} icon-type`}></span>
                                    <span>
                                        {t("common:game-type")}:{" "}
                                        <strong>{t<string>(`common:gameType-${GameTypeName[gameData.gameType]}`)}</strong>
                                    </span>
                                </div>
                                <div className={Styles["detail-item"]}>
                                    <span className={`${Styles["detail-icon"]} icon-rtp`}></span>
                                    <span>
                                        {t("common:rtp")}: <strong>{gameData.rtp}%</strong>
                                    </span>
                                </div>
                                <div className={Styles["detail-item"]}>
                                    <span className={`${Styles["detail-icon"]} icon-tag`}></span>
                                    <span>
                                        {t("common:tag")}: <strong>{t<string>(`common:tag-${TagsName[gameData.tag]}`)}</strong>
                                    </span>
                                </div>
                            </div>
                            <div className={Styles["detail-item"]}>
                                <span className={`${Styles["detail-icon"]} icon-language`}></span>
                                <span>{t("common:language")}: </span>
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
