import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Themes } from "../common/constants";
import Head from "next/head";
import { useEffect, useState } from "react";
import * as _ from "lodash";
import { PlayerIdContextProvider } from "../contexts/player";

const App = ({ Component, pageProps }: AppProps) => {
    const [playerId, setPlayerId] = useState(0);

    useEffect(() => {
        setPlayerId(_.random(1, 10000000));
    }, []);

    return (
        <ThemeProvider attribute="class" defaultTheme={Themes.infoSite} enableSystem={false} storageKey="info-site-mode">
            <PlayerIdContextProvider value={playerId}>
                <Head>
                    <title>Saba Info Site</title>
                </Head>
                <Component {...pageProps} />
            </PlayerIdContextProvider>
        </ThemeProvider>
    );
};

export default appWithTranslation(App);
