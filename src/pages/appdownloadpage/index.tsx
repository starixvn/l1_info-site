import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { v4 as uuidv4 } from "uuid";
import { TFunction, useTranslation } from "next-i18next";
import InstallationGuide from "./installationguide";
import { isMobileOnly } from "react-device-detect";
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
            image: `${imagesPath}button-dl-ios.png`,
            url: "https://hackernoon.com/how-to-build-a-qr-code-generator-in-react"
        },
        {
            image: `${imagesPath}button-dl-android.png`,
            url: "https://css-tricks.com/snippets/css/media-queries-for-standard-devices/"
        },

    ];

    const [qrData, setQrData] = useState<Array<QrCodeDeeplink>>();
    useEffect(() => setQrData(deepLinks), []);

    return (
        <div >
            {
                qrData && qrData.map((item: QrCodeDeeplink, index: number) => {
                    return (<div className={Styles["qr-code"]} key={index}>
                        <div><img src={item.image} alt="" /></div>
                        <div><QRCodeCanvas
                            value={item.url}
                            size={isMobileOnly ? 80 : 90}
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
                    <img className={Styles["logo"]} src={`${imagesPath}logo-saba.png`} alt="" />
                </div>
            </div>
            <div className="row">
                <div className={`col-12 text-center ${Styles["offer"]}`}>
                    Offer variety and high Entertainment Game,
                </div>
                <div className={`col-12 text-center ${Styles["offer"]}`}>
                    there is always something <span className={hightlightText}>new to play</span>
                </div>
            </div>
            <div className="row">
                <div className={`col-12 text-center ${Styles["download-title"]}`} >
                    APP DOWNLOAD
                </div>
            </div>
            <div className="row">
                <div className="col-md-1"> </div>
                <div className={`col-md-5 col-xs-12  ${Styles["description"]}`}>
                    <ul>
                        <li> <img className={Styles["arrow"]} src={`${imagesPath}arrow.png`} alt="" /> Excellent Online Casino Platform</li>
                        <li> <img className={Styles["arrow"]} src={`${imagesPath}arrow.png`} alt="" />Player can choose to play via a <span className={hightlightText}>Web Browser</span> or <span className={hightlightText}>Mobile App</span></li>
                        <li> <img className={Styles["arrow"]} src={`${imagesPath}arrow.png`} alt="" />More Instant! More Convenient!</li>
                    </ul>
                </div>
                <div className={`col-md-6 order-first order-md-2 ${Styles["app-download"]}  ${isMobile ? "text-center" : ""}`}>
                    <DownloadSection />
                </div>
            </div>
            <div className="row text-center">
                <div className={`col-12 ${Styles["installation-guide"]}`}>
                    <div className={Styles["title"]}> INSTALLATION GUIDE</div>
                    <img className={Styles["apple-logo"]} src={`/static/images/app-download/ios-label.png`} alt="" />
                </div>
                <InstallationGuide />
            </div>
            {
                isMobile && (<div className={`${Styles["app-download"]} text-center`}  >
                    <div className={`${Styles["download-title"]}`} >
                        APP DOWNLOAD
                    </div>
                    <DownloadSection />
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
