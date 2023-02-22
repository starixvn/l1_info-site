import React from "react";
import Styles from "./game-icon.module.scss";
export const GameIcon: React.FC<{ gameId: number; isSmallSize?: boolean }> = ({ gameId, isSmallSize }) => {
    return (
        <div className={`${Styles["game-icon"]} ${isSmallSize ? Styles["icon-small"] : ""}`}>
            <img className="icon-bg" src={`/static/images/game-icon/icon-bg-${gameId}.png`} alt="game-icon"></img>
            <img className={Styles["icon-name"]} src={`/static/images/game-icon/icon-name-${gameId}.png`} alt="game-icon"></img>
        </div>
    );
};
export default GameIcon;
