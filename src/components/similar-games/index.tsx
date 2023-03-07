import { TFunction } from "i18next";
import React from "react";

import GameIcon from "../game-icon";
import Styles from "./similar-games.module.scss";

export const SimilarGames: React.FC<{ gameIds: number[]; t: TFunction }> = ({ gameIds, t }) => {
    if (gameIds.length === 0) {
        return <></>;
    }

    return (
        <div className={Styles["similar-game"]}>
            <div className={Styles["title"]}>{t<string>("similar-games")}</div>
            <div className={Styles["icon-container"]}>
                {gameIds.map((id: number) => {
                    return <GameIcon key={id} gameId={id} isSmallSize={true} />;
                })}
            </div>
        </div>
    );
};

export default SimilarGames;
