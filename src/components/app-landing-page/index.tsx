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
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Languages = dynamic(() => import("../language-switcher"));

const imagesPath = "/static/images/app-download/";

const QRCode: React.FC<{ url: string }> = ({ url }) => {
    return (<div><QRCodeCanvas
        value={url}
        size={240}
        level={"Q"}
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

const AppLandingPageComponent: React.FunctionComponent<{ locale: string }> = ({ locale }) => {
    const router = useRouter();
    const selectedLocale = locale ?? router.locale;

    useEffect(() => {
        if (router.isReady) {
            const { pathname } = router;
            router.push({ pathname, query: {} }, undefined, { locale: selectedLocale });
        }
    }, [router.isReady]);

    const [isMobile, setIsMobile] = useState<boolean>();
    useEffect(() => setIsMobile(isMobileOnly), []);

    const [resources, setResources] = useState<IAppLandingPageResource>();
    useEffect(() => setResources(getAppDownloadPageTranslationResource(selectedLocale)), []);

    const hightlightText = Styles["highlight-text"];

    const [selectTabKey, setselectTabKey] = useState<string | null>();
    const handleSelect = (key: string | null) => {
        setselectTabKey(key);
    }
    const appDownloadClass = Styles["app-download"];

    return resources ? (
        <div className={Styles["container"]} >
            <div className="row">
                <div className={Styles["language-wrapper"]}> <Languages /></div>
            </div>
            <div className="row">
                <div className="text-center">
                    <div > <img className={Styles["logo"]} alt="" /></div>
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
                <div className={`col-xl-6 col-lg-12 col-md-12 col-xs-12  ${Styles["description"]}`}>
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
                <div className={`col-xl-3 col-lg-6 col-md-6 col-xs-12 order-first order-md-2 ${appDownloadClass}`}>
                    <IOSSection />
                </div>
                <div className={`col-xl-3 col-lg-6 col-md-6 col-xs-12 order-first order-md-2 ${appDownloadClass}`}>
                    <AndroidSection />
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
                                locale: selectedLocale,
                                device: Devices.IOS,
                                isActive: selectTabKey === Devices.IOS
                            }} />
                        </Tab>
                        <Tab eventKey={Devices.Android} tabClassName={Styles["nav-link"]} title={<img className={Styles["ios-logo-android"]} alt="" />}>
                            <InstallationGuide  {...{
                                stepsResources: resources.steps,
                                locale: selectedLocale,
                                device: Devices.Android,
                                isActive: selectTabKey === Devices.Android
                            }} />
                        </Tab>
                    </Tabs>
                </div>
            </div>
            {
                isMobile && (<div className={`${appDownloadClass} text-center`}  >
                    <div className={`${Styles["download-title"]}`} >
                        {resources.appDownload}
                    </div>
                    <div>
                        <IOSSection />
                        <AndroidSection />
                    </div>
                </div>)
            }
            <ScrollToTop smooth component={<></>} className={Styles["sroll-to-top"]} />

        </div>
    ) : <></>;
};

export default AppLandingPageComponent;
