import { TFunction } from "i18next";
import React from "react";
import Slider from "react-slick";
import { IGame } from "../data";
import GameIcon from "../game-icon";
import Styles from "./similar-games.module.scss";

export const SimilarGames: React.FC<{ gameIds: number[]; t: TFunction; openDetail: (gameData: IGame) => void }> = ({
    gameIds,
    t,
    openDetail,
}) => {
    if (gameIds.length === 0) {
        return <></>;
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 8,
        className: "similar-list",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 765,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className={Styles["similar-game"]}>
            <div className={Styles["title"]}>{t<string>("similar-games")}</div>
            <div className={Styles["icon-container"]}>
                <Slider {...settings}>
                    {gameIds.map((id: number) => {
                        return <GameIcon key={id} gameId={id} isSmallSize={true} openDetail={openDetail} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default SimilarGames;
