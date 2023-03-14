import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { isMobileOnly } from "react-device-detect";

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
        setBanners(isMobileOnly ? nameMobile : nameDesktop);
    }, []);

    const settings = {
        arrows: false,
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
