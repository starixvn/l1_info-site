import React from "react";

import GameIcon from "../game-icon";
import Styles from "./similar-games.module.scss";

export const SimilarGames: React.FC<{ gameIds: number[] }> = ({ gameIds }) => {
    if (gameIds.length === 0) {
        return <></>;
    }

    return (
        <div className={Styles["similar-game"]}>
            <div className={Styles["title"]}>Similar Games</div>
            <div className={Styles["icon-container"]}>
                {gameIds.map((id: number) => {
                    return <GameIcon key={id} gameId={id} isSmallSize={true} />;
                })}
            </div>
        </div>
    );
};

export default SimilarGames;
