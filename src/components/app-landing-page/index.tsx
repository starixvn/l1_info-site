import React, { useEffect, useState } from "react";
import InstallationGuide from "./installationguide";
import { isMobile, isMobileOnly } from "react-device-detect";
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
    isShow: boolean;
    isAndroid: boolean;
}

const DownloadSection = () => {
    const imagesPath = "/static/images/app-download/";
    const apkPath = `${imagesPath}vivadzo.apk`
    const deepLinks: Array<QrCodeDeeplink> = [
        {
            image: `button-dl-ios.png`,
            url: "https://hackernoon.com/how-to-build-a-qr-code-generator-in-react",
            isShow: true,
            isAndroid: false
        },
        {
            image: `button-dl-android.png`,
            url: "/app-landing-page/download-apk-app",
            isShow: true,
            isAndroid: true
        },
    ];

    const [qrData, setQrData] = useState<Array<QrCodeDeeplink>>();
    useEffect(() => setQrData(deepLinks), []);

    return (
        <div >
            {
                qrData && qrData.map((item: QrCodeDeeplink, index: number) => {
                    return item.isShow ? (<div className={Styles["qr-code"]} key={index}>
                        <div>
                            {!item.isAndroid && <a target="_blank" href={item.url}><img src={`${imagesPath}${item.image}`} alt="" /></a>}
                            {item.isAndroid && <a href={apkPath}><img src={`${imagesPath}${item.image}`} alt="" /></a>}
                        </div>
                        <div><QRCodeCanvas
                            value={item.url}
                            size={isMobile ? 70 : 90}
                            level={"L"}
                            includeMargin={true}
                        /></div>
                    </div>) : <div key={index}></div>;
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
            <div className={`row ${Styles["margin-top-40"]}`}>
                <div className={`col-md-6 col-xs-12  ${Styles["description"]}`}>
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
                <div className={`col-md-6 col-xs-12 order-first order-md-2 ${Styles["app-download"]}`}>
                    <DownloadSection />
                </div>
            </div>
            <div className="row text-center">
                <div className={`col-12 ${Styles["installation-guide"]}`}>
                    <div className={Styles["title"]}>{resources.installationGuide}</div>
                    <img className={Styles["apple-logo"]} alt="" />
                </div>
                <InstallationGuide resources={resources} locale={locale} />
            </div>
            {
                isMobile && (<div className={`${Styles["app-download"]} text-center`}  >
                    <div className={`${Styles["download-title"]}`} >
                        {resources.appDownload}
                    </div>
                    <DownloadSection />
                </div>)
            }
            <ScrollToTop smooth component={<></>} className={Styles["sroll-to-top"]} />

        </div>
    ) : <></>;
};

export default AppLandingPageComponent;
