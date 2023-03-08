import { useRouter } from "next/router";
import React from "react";

import { IGame } from "../data";
import Styles from "./game-icon.module.scss";

type TGameIconProps = {
    gameId: number;
    isSmallSize?: boolean;
    isNew?: boolean;
    game?: IGame;
    openDetail?: (game: IGame) => void;
};

export const GameIcon: React.FC<TGameIconProps> = ({ gameId, isSmallSize, isNew, game, openDetail }) => {
    const router = useRouter();

    return (
        <div
            className={`${Styles["game-icon"]} ${isSmallSize ? Styles["icon-small"] : ""}`}
            onClick={() => game && openDetail && openDetail(game)}
        >
            <img className="icon-bg" src={`/static/images/game-icon/icon-bg-${gameId}.png?v=1`} alt="game-icon"></img>
            <img
                className={Styles["icon-name"]}
                src={`/static/images/game-icon/icon-name-${gameId}_${router.locale}.png?v=1`}
                alt="game-icon"
            ></img>
            {isNew ? <div className={Styles["game-tag"]}>New</div> : <></>}
        </div>
    );
};
export default GameIcon;
