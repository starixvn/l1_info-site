import { useRouter } from "next/router";
import React from "react";

import { IGameData } from "../data";
import Styles from "./game-icon.module.scss";

type TGameIconProps = {
    gameId: number;
    isSmallSize?: boolean;
    isNew?: boolean;
    gameData?: IGameData;
    openDetail?: (gameData: IGameData) => void;
};

export const GameIcon: React.FC<TGameIconProps> = ({ gameId, isSmallSize, isNew, gameData, openDetail }) => {
    const router = useRouter();

    return (
        <div
            className={`${Styles["game-icon"]} ${isSmallSize ? Styles["icon-small"] : ""}`}
            onClick={() => gameData && openDetail && openDetail(gameData)}
        >
            <img className="icon-bg" src={`/static/images/game-icon/icon-bg-${gameId}.png`} alt="game-icon"></img>
            <img
                className={Styles["icon-name"]}
                src={`/static/images/game-icon/icon-name-${gameId}_${router.locale}.png`}
                alt="game-icon"
            ></img>
            {isNew ? <div className={Styles["game-tag"]}>New</div> : <></>}
        </div>
    );
};
export default GameIcon;
