import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { isMobileOnly } from "react-device-detect";
import Image from "next/legacy/image";
import { useRouter } from "next/router";

const BannerItem: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div>
            <Image
                className="img"
                src={`/static/images/banners/${name}`}
                alt="bg"
                priority
                layout="responsive"
                width={isMobileOnly ? 750 : 1920}
                height={isMobileOnly ? 420 : 400}
            />
        </div>
    );
};

const GameBanner = () => {
    const [banners, setBanners] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        const nameMobile = [
            `banner-1_mobile_${router.locale}.jpg`,
            `banner-2_mobile_${router.locale}.jpg`,
            `banner-3_mobile_${router.locale}.jpg`,
        ];
        const nameDesktop = [`banner-1_${router.locale}.jpg`, `banner-2_${router.locale}.jpg`, `banner-3_${router.locale}.jpg`];
        setBanners(isMobileOnly ? nameMobile : nameDesktop);
    }, [router.locale]);

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
