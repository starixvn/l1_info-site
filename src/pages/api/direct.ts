import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import appSettings from "../../common/app-settings";

const direct = async (req: NextApiRequest, res: NextApiResponse) => {
    const randomPlayerId = (Math.floor(Math.random() * 9000000) + 1000000).toString();
    const gameId = req.query.gameId || req.query.gameid;
    const request = {
        playerId: randomPlayerId,
        playerName: `username_${randomPlayerId}`,
        language: "en-US",
        currency: appSettings.operatorPFF.currency,
        seq: "d,y,lumi",
        siteId: "4100300",
        siteName: "InfoSite",
        ip: "0",
        browserUserAgent: req.headers["user-agent"],
        auth: {
            operatorId: appSettings.operatorPFF.id,
            operatorSecret: appSettings.operatorPFF.secret,
        },
        token: "",
        redirectUrl: "#",
        verifyResult: null,
        gameId: gameId,
        domain: "example.com",
        appType: 2,
        isCash: true,
        disableJackpotGames: false,
        devIp: "",
        operatorToken: "PFFToken",
        setDefaultBalance: false,
    };

    const responseBalance = await Axios.post(
        `${appSettings.owApiUrl}/SetDefaultBalance?playerId=${randomPlayerId}&operator=pff&balance=20000&siteId=4100300`
    );
    if (responseBalance.status !== 200) {
        return;
    }
    const responseSSO = await Axios.post(`${appSettings.simulatorUrl}/signin/sso`, request);

    res.redirect(responseSSO.data.redirectUrl.replace("https://demo.vgaming.io", "https://l2sitawsapi.sgamesuat.com") + `&ref=m_direct`);
};

export default direct;
