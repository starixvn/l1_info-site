import { useRouter } from "next/router";
import React from "react";
import Styles from "./game-icon.module.scss";

export const GameIcon: React.FC<{ gameId: number; isSmallSize?: boolean; isNew?: boolean }> = ({ gameId, isSmallSize, isNew }) => {
    const router = useRouter();
    return (
        <div className={`${Styles["game-icon"]} ${isSmallSize ? Styles["icon-small"] : ""}`}>
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
