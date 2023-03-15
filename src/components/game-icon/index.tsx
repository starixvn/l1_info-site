import Image from "next/image";
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
    customClassName?: string;
    isLink?: boolean;
};

export const GameIcon: React.FC<TGameIconProps> = ({ gameId, isSmallSize, isNew, game, openDetail, customClassName, isLink = false }) => {
    const router = useRouter();
    const clickable = isLink ? "clickable" : "";
    return (
        <div
            className={`${Styles["game-icon"]} ${customClassName} ${isSmallSize ? Styles["icon-small"] : ""} ${clickable}`}
            onClick={() => game && openDetail && openDetail(game)}
        >
            <div className={Styles["container-icon"]}>
                <Image
                    className="icon-bg"
                    src={`/static/images/game-icon/icon-bg-${gameId}.png?v=1`}
                    alt="game-icon"
                    loading="lazy"
                    width={isSmallSize ? 118 : 200}
                    height={isSmallSize ? 118 : 200}
                />

                <Image
                    className={Styles["icon-name"]}
                    src={`/static/images/game-icon/icon-name-${gameId}_${router.locale}.png?v=1`}
                    alt="game-icon"
                    loading="lazy"
                    width={isSmallSize ? 118 : 200}
                    height={isSmallSize ? 118 : 200}
                />
                {isNew ? <div className={Styles["game-tag"]}>New</div> : <></>}
            </div>
        </div>
    );
};
export default GameIcon;
