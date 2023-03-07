import React, { useEffect, useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { isMobile } from "react-device-detect";

import { buildVersion } from "../../common/constants";
import Styles from "./game-banner.module.scss";

const NextArrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${Styles["customize-slick-next"]}`} onClick={onClick}>
            <img className="img" src={`/static/images/banners/next.png?v=${buildVersion}`} alt="next"></img>
        </div>
    );
};

const PrevArrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${Styles["customize-slick-prev"]}`} onClick={onClick}>
            <img className="img" src={`/static/images/banners/prev.png?v=${buildVersion}`} alt="prev"></img>
        </div>
    );
};

const BannerItem: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div>
            <img className="img" src={`/static/images/banners/${name}`} alt="bg"></img>
        </div>
    );
};

const GameBanner = () => {
    const [banners, setBanners] = useState<string[]>([]);

    useEffect(() => {
        const nameMobile = ["banner-1_mobile.jpg", "banner-2_mobile.jpg", "banner-3_mobile.jpg"];
        const nameDesktop = ["banner-1.jpg", "banner-2.jpg", "banner-3.jpg"];
        setBanners(isMobile ? nameMobile : nameDesktop);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        swipeToSlide: true,
        initialSlide: 1,
        autoplay: true,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <React.Fragment>
            <section className="banner-top">
                {banners.length > 0 && (
                    <Slider {...settings}>
                        {banners.map((name) => {
                            return <BannerItem key={name} name={name} />;
                        })}
                    </Slider>
                )}
            </section>
        </React.Fragment>
    );
};

export default GameBanner;
