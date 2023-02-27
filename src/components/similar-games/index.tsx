import React from "react";

import GameIcon from "../game-icon";
import Styles from "./similar-games.module.scss";

export const SimilarGames: React.FC = () => {
    return (
        <div className={Styles["similar-game"]}>
            <div className={Styles["title"]}>Similar Games</div>
            <div className={Styles["icon-container"]}>
                <GameIcon gameId={1} isSmallSize={true} />
                <GameIcon gameId={10} isSmallSize={true} />
                <GameIcon gameId={21} isSmallSize={true} />
            </div>
        </div>
    );
};

export default SimilarGames;
