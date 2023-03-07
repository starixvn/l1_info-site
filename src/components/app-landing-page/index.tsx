import React, { useEffect, useState } from "react";
import InstallationGuide from "./installationguide";
import { isMobileOnly } from "react-device-detect";
import Styles from "./app-landing-page.module.scss";
import ScrollToTop from "react-scroll-to-top";
import { QRCodeCanvas } from "qrcode.react";
import { getAppDownloadPageTranslationResource } from "./languages";
import { Markup } from "interweave";
import { StringFormat } from "../../helpers/string-helper";
import { IAppLandingPageResource } from "./languages/types";

interface QrCodeDeeplink {
    image: string;
    url: string;
}

const DownloadSection = () => {
    const imagesPath = "/static/images/app-download/";
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

const AppLandingPageComponent: React.FunctionComponent<{ locale: string }> = ({ locale }) => {
    const [isMobile, setIsMobile] = useState<boolean>();
    useEffect(() => setIsMobile(isMobileOnly), []);

    const [resources, setResources] = useState<IAppLandingPageResource>();
    useEffect(() => setResources(getAppDownloadPageTranslationResource(locale)), []);

    const hightlightText = Styles["highlight-text"];

    return resources ? (
        <div className={Styles["container"]} >
            <div className="row">
                <div className="text-center">
                    <img className={Styles["logo"]} alt="" />
                </div>
            </div>
            <div className="row">
                {
                    resources.introductions.map((introduction, index) => {
                        return (<div key={index} className={`col-12 text-center ${Styles["offer"]}`}>
                            {<Markup content={StringFormat(introduction, hightlightText)} />}
                        </div>)
                    })
                }
            </div>
            <div className="row">
                <div className={`col-12 text-center ${Styles["download-title"]}`} >
                    {resources.appDownload}
                </div>
            </div>
            <div className="row">
                <div className="col-md-1"> </div>
                <div className={`col-md-5 col-xs-12  ${Styles["description"]}`}>
                    <ul>
                        {
                            resources.descriptions.map((description, index) => {
                                return (<li key={index}>
                                    <img className={Styles["arrow"]} alt="" />
                                    {<Markup content={StringFormat(description, hightlightText)} />}
                                </li>)
                            })
                        }
                    </ul>
                </div>
                <div className={`col-md-6 order-first order-md-2 ${Styles["app-download"]}  ${isMobile ? "text-center" : ""}`}>
                    <DownloadSection />
                </div>
            </div>
            <div className="row text-center">
                <div className={`col-12 ${Styles["installation-guide"]}`}>
                    <div className={Styles["title"]}>{resources.installationGuide}</div>
                    <img className={Styles["apple-logo"]} alt="" />
                </div>
                <InstallationGuide resources={resources} />
            </div>
            {
                isMobile && (<div className={`${Styles["app-download"]} text-center`}  >
                    <div className={`${Styles["download-title"]}`} >
                        {resources.appDownload}
                    </div>
                    <DownloadSection />
                </div>)
            }
            <ScrollToTop smooth />
        </div>
    ) : <></>;
};

export default AppLandingPageComponent;
