import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import appSettings from "../../common/app-settings";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { playerId, gameId, language, browserUserAgent } = req.body;
    const request = {
        playerId,
        playerName: `username_${playerId}`,
        language,
        currency: "$US",
        seq: "d,y,lumi",
        siteId: "4100300",
        siteName: "InfoSite",
        ip: "0",
        browserUserAgent,
        auth: {
            operatorId: appSettings.operatorPFF.id,
            operatorSecret: appSettings.operatorPFF.secret,
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
        operatorToken: "PFFToken",
        setDefaultBalance: false,
    };

    Axios.post(`${appSettings.owApiUrl}/SetDefaultBalance?playerId=${playerId}&operator=pff&balance=20000`).catch((error) =>
        res.send({ error, from: "balance" })
    );

    Axios.post(`${appSettings.simulatorUrl}/signin/sso`, request)
        .then((data) => data.data)
        .then((data) => (data.error ? Promise.reject(data.error) : data))
        .then((data) => {
            data?.redirectUrl && res.send({ redirectUrl: data.redirectUrl });
        })
        .catch((error) => res.send({ error, from: "sso" }));
};

export default handler;
