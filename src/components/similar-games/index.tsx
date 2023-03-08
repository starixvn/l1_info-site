import { TFunction } from "i18next";
import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";
import { GameCategoryName } from "../../common/constants";
import { IGame } from "../data";
import GameIcon from "../game-icon";
import Styles from "./similar-games.module.scss";

export const SimilarGames: React.FC<{ games: IGame[]; t: TFunction }> = ({ games, t }) => {
    const router = useRouter();
    const openDetail = (game: IGame) => {
        router.push(`/category/${GameCategoryName[game.gameCategory]}/${game.gameId}`);
    };

    if (games.length === 0) {
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
                    {games.map((game: IGame) => {
                        return <GameIcon key={game.gameId} gameId={game.gameId} game={game} isSmallSize={true} openDetail={openDetail} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default SimilarGames;
