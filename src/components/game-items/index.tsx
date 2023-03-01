import React, { useState } from "react";
import { useRouter } from "next/router";

import { buildVersion, GameCategoryRouter } from "../../common/constants";
import Styles from "./game-item.module.scss";
import Axios from "axios";
import { IGameData } from "../data";
import { useTranslation } from "next-i18next";

export function randomString(length: number) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const GameItems: React.FC<{ gameData: IGameData[]; updateGameData?: Function }> = ({ gameData }) => {
    const router = useRouter();
    const [domain, setDomain] = useState("https://l1-glbs2.lumigame.com");
    const [token, settoken] = useState("");
    const { t } = useTranslation("detail");

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
        console.log(game);
        router.push(`/category/${GameCategoryRouter[game.gameCategory]}/${game.gameName.trim()}`);
    };

    return (
        <section className="container list-container">
            {gameData.map((game: IGameData) => {
                return (
                    <div className={Styles["game-container"]} key={game.gameId}>
                        <div className={Styles["game-name"]}>{t<string>(`${game.gameName}.displayedName`)}</div>
                        <div className={Styles["game-play"]}>
                            <div className={Styles["game-icon"]} onClick={() => openDetail(game)}>
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
                            <button type="button" className="btn btn-primary" onClick={(event) => playForFunAction(event, game.gameId)}>
                                {t<string>("playForFun")}
                            </button>
                        </div>
                        <div className={Styles["game-detail"]}>
                            <div className={Styles["game-intro"]}>{t<string>(`${game.gameName}.detail`)}</div>
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

export default GameItems;
