import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { UserStakeLevel } from "../../components/pages/guide/constants";
import GuideComponent from "../../components/pages/guide";

export const GameGuide: React.FC = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [gameId, setGameId] = useState<number>(0);
    const [gameConfigs, setGameConfigs] = useState<any>({});

    const getGameConfig = (config: Function): any => {
        return import(`../../components/pages/guide/game-configs/game-configs-${gameId}`).then((mod: any) => {
            config(mod.default);
        });
    };

    useEffect(() => {
        if (router.isReady) {
            const queryParams: object | any = router.query;
            setGameId(queryParams.gameId);
            setIsLoading(false);
        }
    }, [router.isReady]);

    useEffect(() => {
        gameId > 0 && getGameConfig(setGameConfigs);
    }, [gameId]);

    if (isLoading || !gameConfigs) {
        return <></>;
    }

    return (
        <>{gameConfigs && <GuideComponent gameId={gameId} userStakeLevel={UserStakeLevel} gameConfigs={gameConfigs}></GuideComponent>}</>
    );
};

export const getStaticProps = async ({ locale = "en" }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common", "detail"])),
    },
});

export default GameGuide;
