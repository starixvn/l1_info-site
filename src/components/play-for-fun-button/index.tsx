import React from "react";
import { useTranslation } from "next-i18next";
import Axios from "axios";
import { LanguageLocaleMapper } from "../../common/constants";
import appSettings from "../../common/app-settings";

type Props = {
    gameId: number;
    playerId: number;
};

const PlayForFunButton: React.FC<Props> = ({ gameId, playerId }) => {
    const { t, i18n } = useTranslation(["common", "detail"]);

    const playForFunAction = (event: any, gameId: number) => {
        event && event.preventDefault();
        const request = {
            playerId,
            playerName: `username_${playerId}`,
            language: LanguageLocaleMapper[i18n.language],
            currency: "$US",
            seq: "d,y,lumi",
            siteId: "4100300",
            siteName: "InfoSite",
            ip: "",
            browserUserAgent: navigator.userAgent,
            auth: {
                operatorId: "ONEworks1",
                operatorSecret: "ONEworks1@20luminet&",
            },
            token: "",
            redirectUrl: "#",
            verifyResult: null,
            gameId: gameId,
            domain: "example.com",
            appType: 1,
            isCash: true,
            disableJackpotGames: false,
            devIp: "",
            operatorToken: "InfoSiteToken",
            setDefaultBalance: false,
        };

        Axios.get(`${appSettings.simulatorUrl}/signin/ip`, { timeout: 10000 })
            .then((data) => (request.ip = data.data))
            .catch(showAlert);

        Axios.post(`${appSettings.owApiUrl}/SetDefaultBalance?playerId=${playerId}&operator=ow&balance=20000`).catch(showAlert);

        Axios.post(`${appSettings.simulatorUrl}/signin/sso`, request)
            .then((data) => data.data)
            .then((data) => (data.error ? Promise.reject(data.error) : data))
            .then((data) => {
                data?.redirectUrl && window.open(data.redirectUrl);
            })
            .catch(showAlert);

        event && event.preventDefault();
    };

    const showAlert = (obj: object) => {
        window.alert(JSON.stringify(obj, null, 2));
    };

    return (
        <button type="button" className="btn btn-primary" onClick={(event) => playForFunAction(event, gameId)}>
            {t<string>("common:playForFun")}
        </button>
    );
};

export default PlayForFunButton;
