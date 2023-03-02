import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { v4 as uuidv4 } from "uuid";
import { TFunction, useTranslation } from "next-i18next";
import InstallationGuide from "./installationguide";
import { useRouter } from 'next/router';
import { isMobileOnly, isIOS } from "react-device-detect";
import Styles from "./app-download-page.module.scss";
import ScrollToTop from "react-scroll-to-top";
import { QRCodeCanvas } from "qrcode.react";

const imagesPath = "/static/images/app-download/";

interface QrCodeDeeplink {
    image: string;
    url: string;
}

const DownloadSection = () => {
    const deepLinks: Array<QrCodeDeeplink> = [
        {
            image: `${imagesPath}3.png`,
            url: "https://hackernoon.com/how-to-build-a-qr-code-generator-in-react"
        },
        {
            image: `${imagesPath}4.png`,
            url: "https://css-tricks.com/snippets/css/media-queries-for-standard-devices/"
        },

    ];

    const [qrData, setQrData] = useState<Array<QrCodeDeeplink>>();
    useEffect(() => setQrData(deepLinks), []);

    return (
        <div className={Styles["download-session"]}>
            <span className={Styles["title"]}>APP DOWNLOAD</span>
            {
                qrData && qrData.map((item, index) => {
                    return (<div className={Styles["qr-code"]} key={index}>
                        <div><img src={item.image} alt="" /></div>
                        <div><QRCodeCanvas
                            value={item.url}
                            size={70}
                            level={"L"}
                        /></div>
                    </div>);
                })
            }
        </div >
    );
}

const AppDownloadPage = () => {
    const [isMobile, setIsMobile] = useState<boolean>();
    useEffect(() => setIsMobile(isMobileOnly), []);

    const hightlightText = Styles["highlight-text"];
    return (
        <div className={Styles["container"]} >
            <div className="row">
                <div className="text-center">
                    <img className={Styles["logo"]} src={`${imagesPath}2.png`} alt="" />
                </div>
            </div>
            <div className="row">
                {!isMobile && <div className="col-xs-3 col-md-3"><img className={Styles["card-chip"]} src={`${imagesPath}1.png`} alt="" /></div>}
                <div className="col-xs-7 col-md-7 text-center" style={{ fontSize: "18px" }}>
                    Offer variety and high Entertainment Game, there is always something <span className={hightlightText}>new to play</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {isMobile && <div className={Styles["mobile-description"]}>
                        <div>
                            + Excellent Online Casino Platform
                        </div>
                        <div>
                            <img className={Styles["roulette-chip"]} src={`/static/images/app-download/5.png`} alt="" />
                        </div>
                        <div >
                            <div>+ Player can choose to play via a <span className={hightlightText}>Web Browser</span> or <span className={hightlightText}>Mobile App</span></div>
                            <div>+ More Instant! More Convenient!</div>
                        </div>
                    </div>
                    }
                    {!isMobile && <div className={Styles["desktop-description"]}>
                        <div> + Excellent Online Casino Platform </div>
                        <div> + Player can choose to play via a <span className={hightlightText}>Web Browser</span> or <span className={hightlightText}>Mobile App</span> </div>
                        <div> + More Instant! More Convenient! </div>
                        <img className={Styles["roulette-chip"]} src={`/static/images/app-download/5.png`} alt="" />
                    </div>
                    }
                </div>
                <div className="col-md-1"></div>
                <div className={`col-md-7 order-first order-md-2 ${Styles["app-download"]}  ${isMobile ? "text-center" : ""}`}>
                    <DownloadSection />
                </div>
            </div>
            <div className="row text-center">
                <div className={`col-xs-12 col-md-12 ${Styles["installation-guide"]}`}>
                    <div className={Styles["title"]}> INSTALLATION GUIDE</div>
                    <img className={Styles["apple-logo"]} src={`/static/images/app-download/apple-logo.png`} alt="" />
                </div>
                <InstallationGuide />
            </div>
            {
                isMobile && (<div className={`${Styles["app-download"]} text-center`}  >
                    <div>
                        <DownloadSection />
                    </div>
                </div>)
            }
            <ScrollToTop smooth />
        </div>
    );
};

export const getStaticProps = async ({ locale = "en" }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};

export default AppDownloadPage;
