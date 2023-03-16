import React from "react";
import { useTranslation } from "next-i18next";
import Axios from "axios";
import { LanguageLocaleMapper } from "../../common/constants";
import * as _ from "lodash";

type Props = {
    gameId: number;
};

const playerIdKey = "playerId";
const windowName = "play4fun";

const PlayForFunButton: React.FC<Props> = ({ gameId }) => {
    const { t, i18n } = useTranslation(["common", "detail"]);

    const playForFunAction = (event: any, gameId: number) => {
        event && event.preventDefault();

        let playerId = localStorage.getItem(playerIdKey);
        if (!playerId) {
            playerId = _.random(1, 100000000).toString();
            localStorage.setItem(playerIdKey, playerId);
        }
        const request = {
            playerId: +playerId,
            language: LanguageLocaleMapper[i18n.language],
            browserUserAgent: navigator.userAgent,
            gameId,
        };
        Axios.post(`/api/play-for-fun`, request)
            .then((data) => data.data)
            .then((data) => {
                data?.redirectUrl && window.open(data.redirectUrl, windowName, "popup=1");
            })
            .catch(showAlert);
    };

    const showAlert = (obj: any) => {
        window.alert(JSON.stringify(obj, null, 2));
    };

    return (
        <button type="button" className="btn btn-primary" onClick={(event) => playForFunAction(event, gameId)}>
            {t<string>("common:playForFun")}
        </button>
    );
};

export default PlayForFunButton;
