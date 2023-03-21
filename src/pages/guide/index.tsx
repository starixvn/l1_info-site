import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

import { UserStakeLevel } from "../../components/pages/guide/constants";

const GuideComponent = dynamic(() => import("../../components/pages/guide"));

export const GameGuide: React.FC = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [gameId, setGameId] = useState<number>(0);

    useEffect(() => {
        if (router.isReady) {
            const queryParams: object | any = router.query;
            setGameId(queryParams.gameId);
            setIsLoading(false);
        }
    }, [router.isReady]);

    useEffect(() => {
        const handlePopstate = () => {
            const queryParams = new URLSearchParams(window.location.search);
            const gameId = queryParams.get("gameId") || 0;
            console.log("handlePopstate:", gameId); // log the query parameters
            setGameId(+gameId);
        };

        window.addEventListener("popstate", handlePopstate);

        return () => {
            window.removeEventListener("popstate", handlePopstate);
        };
    }, []);

    if (isLoading) {
        return <></>;
    }

    return <>{<GuideComponent gameId={gameId} userStakeLevel={UserStakeLevel}></GuideComponent>}</>;
};

export const getStaticProps = async ({ locale = "en" }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common", "detail", "seo"])),
    },
});

export default GameGuide;
