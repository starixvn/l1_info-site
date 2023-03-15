import React from "react";
import { useTranslation } from "next-i18next";
import Axios from "axios";
import { LanguageLocaleMapper } from "../../common/constants";
import { usePlayerIdContext } from "../../contexts/player";

type Props = {
    gameId: number;
};

const PlayForFunButton: React.FC<Props> = ({ gameId }) => {
    const { t, i18n } = useTranslation(["common", "detail"]);
    const playerId = usePlayerIdContext();

    const playForFunAction = (event: any, gameId: number) => {
        event && event.preventDefault();

        const request = {
            playerId,
            language: LanguageLocaleMapper[i18n.language],
            browserUserAgent: navigator.userAgent,
            gameId,
        };
        Axios.post(`/api/play-for-fun`, request)
            .then((data) => data.data)
            .then((data) => {
                data?.redirectUrl && window.open(data.redirectUrl);
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
