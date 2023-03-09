import { TFunction } from "i18next";
import { useRouter } from "next/router";
import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { GameCategoryName } from "../../common/constants";
import { IGame } from "../data";
import GameIcon from "../game-icon";
import Styles from "./similar-games.module.scss";

const NextArrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${Styles["customize-slick-next"]}`} onClick={onClick}>
            <span className="icon-arrow-left" />
        </div>
    );
};

const PrevArrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${Styles["customize-slick-prev"]}`} onClick={onClick}>
            <span className="icon-arrow-left" />
        </div>
    );
};

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
        slidesToShow: 7,
        slidesToScroll: 1,
        className: "similar-list",
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
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
                        return (
                            <GameIcon
                                key={game.gameId}
                                gameId={game.gameId}
                                game={game}
                                isSmallSize={true}
                                openDetail={openDetail}
                                customClassName={"similar-game-icon"}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default SimilarGames;
