import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import appSettings from "../../common/app-settings";

const playForFun = async (req: NextApiRequest, res: NextApiResponse) => {
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

    const responseBalance = await Axios.post(`${appSettings.owApiUrl}/SetDefaultBalance?playerId=${playerId}&operator=pff&balance=20000`);
    if (responseBalance.status !== 200) {
        console.log({ responseBalance });
        return;
    }
    const responseSSO = await Axios.post(`${appSettings.simulatorUrl}/signin/sso`, request);
    res.send(responseSSO.data);
};

export default playForFun;
