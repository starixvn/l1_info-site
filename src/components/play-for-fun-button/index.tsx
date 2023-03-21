import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { LanguageLocaleMapper } from "../../common/constants";

type Props = {
    gameId: number;
};

const playerIdKey = "playerId";
export const windowNamePFF = "play4fun";
let windowPlayForFun: Window | null = null;

const PlayForFunButton: React.FC<Props> = ({ gameId }) => {
    const { t, i18n } = useTranslation(["common", "detail"]);
    const [urlSSO, setUrlSSO] = useState<string>();

    const playForFunAction = async (event: any, gameId: number) => {
        event && event.preventDefault();
        windowPlayForFun?.close();
        setUrlSSO("");
        windowPlayForFun = window.open("", windowNamePFF, "width=1280,height=860");

        let playerId = localStorage.getItem(playerIdKey);
        if (!playerId) {
            const _ = (await import("lodash")).default;
            playerId = _.random(1, 100000000).toString();
            localStorage.setItem(playerIdKey, playerId);
        }
        const request = {
            playerId: +playerId,
            language: LanguageLocaleMapper[i18n.language],
            browserUserAgent: navigator.userAgent,
            gameId,
        };

        const Axios = (await import("axios")).default;
        Axios.post(`/api/play-for-fun`, request)
            .then((data) => data.data)
            .then((data) => {
                data?.redirectUrl && setUrlSSO(`${data.redirectUrl}&ref=d_operator_opendirectly`);
            })
            .catch(showAlert);
    };

    useEffect(() => {
        urlSSO && windowPlayForFun && (windowPlayForFun.location.href = urlSSO);
    }, [urlSSO]);

    const showAlert = (obj: any) => {
        window.alert(JSON.stringify(obj, null, 2));
    };

    return (
        <button type="button" className="btn btn-primary" onClick={async (event) => playForFunAction(event, gameId)}>
            {t<string>("common:playForFun")}
        </button>
    );
};

export default PlayForFunButton;
