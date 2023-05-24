import React, { useEffect, useState } from "react";
import InstallationGuide from "./installationguide";
import { isMobile, isMobileOnly, isIOS } from "react-device-detect";
import Styles from "./app-landing-page.module.scss";
import ScrollToTop from "react-scroll-to-top";
import { QRCodeCanvas } from "qrcode.react";
import { getAppDownloadPageTranslationResource } from "./languages";
import { Markup } from "interweave";
import { StringFormat } from "../../helpers/string-helper";
import { Devices, IAppLandingPageResource } from "./languages/types";
import { Tab, Tabs } from "react-bootstrap";
import appSettings from "../../common/app-settings";

const imagesPath = "/static/images/app-download/";

const QRCode: React.FC<{ url: string }> = ({ url }) => {
    return (<div><QRCodeCanvas
        value={url}
        size={isMobile ? 70 : 90}
        level={"L"}
        includeMargin={true}
    /></div>);
};

const AndroidSection = () => {
    const apkPath = `${imagesPath}SABA.games.apk`;
    return (<div className={Styles["qr-code"]}>
        <div>
            <a href={apkPath}><img src={`${imagesPath}button-dl-android.png`} alt="" /></a>
        </div>
        <QRCode url={`${appSettings.rootUrl}${apkPath}`} />
    </div>);
}

const IOSSection = () => {
    const iosPreviewLink = "https://apps.apple.com/us/app/vivadzo/id6446310346";
    const buttonLink = isMobile && isIOS ? appSettings.iosDeeplink : iosPreviewLink;

    return (<div className={Styles["qr-code"]}>
        <div>
            <a target="_blank" href={buttonLink}><img src={`${imagesPath}button-dl-ios.png`} alt="" /></a>
        </div>
        <QRCode url={appSettings.iosDeeplink} />
    </div>);
}

const DownloadSection = () => {
    return (<div>
        <IOSSection />
        <AndroidSection />
    </div>)
}
const AppLandingPageComponent: React.FunctionComponent<{ locale: string }> = ({ locale }) => {
    const [isMobile, setIsMobile] = useState<boolean>();
    useEffect(() => setIsMobile(isMobileOnly), []);

    const [resources, setResources] = useState<IAppLandingPageResource>();
    useEffect(() => setResources(getAppDownloadPageTranslationResource(locale)), []);

    const hightlightText = Styles["highlight-text"];

    const [selectTabKey, setselectTabKey] = useState<string | null>();
    const handleSelect = (key: string | null) => {
        setselectTabKey(key);
    }

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
            <div className="row text-center align-items-center">
                <div className={`col-12 ${Styles["installation-guide"]}`}>
                    <label className={Styles["title"]}>{resources.installationGuide}</label>
                    <Tabs
                        defaultActiveKey={!isMobile || isIOS ? Devices.IOS : Devices.Android}
                        className={Styles["nav-tabs"]}
                        onSelect={device => handleSelect(device)}
                        justify
                    >
                        <Tab eventKey={Devices.IOS} tabClassName={Styles["nav-link"]} title={<img className={Styles["ios-logo-apple"]} alt="" />}>
                            <InstallationGuide {...{
                                stepsResources: resources.steps,
                                locale,
                                device: Devices.IOS,
                                isActive: selectTabKey === Devices.IOS
                            }} />
                        </Tab>
                        <Tab eventKey={Devices.Android} tabClassName={Styles["nav-link"]} title={<img className={Styles["ios-logo-android"]} alt="" />}>
                            <InstallationGuide  {...{
                                stepsResources: resources.steps,
                                locale,
                                device: Devices.Android,
                                isActive: selectTabKey === Devices.Android
                            }} />
                        </Tab>
                    </Tabs>
                </div>
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
