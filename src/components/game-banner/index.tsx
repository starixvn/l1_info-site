import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { buildVersion } from "../../common/constants";
import { isMobile } from "react-device-detect";
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
    const mobileClass = isMobile ? "_mobile" : "_desktop";
    return (
        <div>
            <img className="img" src={`/static/images/banners/${name}${mobileClass}.jpg`} alt="bg"></img>
        </div>
    );
};

export class GameBanner extends React.PureComponent {
    render() {
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
        const bannerName = ["banner-1", "banner-2", "banner-3"];
        return (
            <React.Fragment>
                <section className="banner-top">
                    <Slider {...settings}>
                        {bannerName.map((name) => {
                            return <BannerItem key={name} name={name} />;
                        })}
                    </Slider>
                </section>
            </React.Fragment>
        );
    }
}
