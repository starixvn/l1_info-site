import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { v4 as uuidv4 } from "uuid";
import { TFunction, useTranslation } from "next-i18next";
import InstallationGuide from "./installationguide";
import { useRouter } from 'next/router';
import { isMobileOnly, isIOS } from "react-device-detect";
import Styles from "./app-download-page.module.scss";
import ScrollToTop from "react-scroll-to-top";
const imagesPath = "/static/images/app-download/";

const DownloadSection = () => {
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <h2 style={{ fontWeight: "bold", color: "#f19706", marginTop: "20px" }} className="panel-body text-center ">APP DOWNLOAD</h2>
                <br /><div className="panel-body text-center "><img src={`${imagesPath}3.png`} style={{ height: "40px", width: "200px", marginLeft: "20px" }} /></div>
                <br /><div className="panel-body text-center"><img src={`${imagesPath}4.png`} style={{ height: "40px", width: "200px", marginLeft: "20px" }} /></div>
            </div>
        </div>
    );
}
const AppDownloadPage = () => {
    const router = useRouter()
    const navigateToInstallationGuide = () => {
        router.push('/appdownloadpage/installationguide')
    };
    const [isMobile, setIsMobile] = useState<boolean>();
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => setIsMobile(isMobileOnly), []);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    if (isMobile) {
        return (
            <div className={Styles["container"]} style={{ background: "#0c558a" }}>
                <div className="row make-columns">
                    <div className="text-center">
                        <div className="panel panel-default">
                            <div className="panel-body"><img src={`${imagesPath}2.png`} style={{ height: "50px", width: "200px", margin: "20px" }} /></div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-body" >
                                Offer variety and high Entertainment Game, there is always something <span style={{ color: '#f19706' }}>new to play</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-7">
                        <DownloadSection />
                    </div>
                    <div className=" ">
                        <div className="panel panel-default" style={{ marginTop: "20px" }}>
                            <div className="panel-body">
                                + Excellent Online Casino Platform
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="panel-body">
                                        <img src={`/static/images/app-download/5.png`} style={{ height: "100px", width: "100px" }} />
                                        + Player can choose to play via a <span style={{ color: "#f19706" }}>Web Browser</span>  or <span style={{ color: "#f19706" }}>Mobile App</span>
                                        <br />+ More Instant! More Convenient!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-md-4"></div>
                    <div className="col-xs-4 col-md-4">
                        <div className="panel panel-default text-center" style={{ marginTop: "50px" }}>
                            <a onClick={navigateToInstallationGuide} style={{ fontWeight: "bold", textDecoration: "underline", color: "#f19706", cursor: "pointer", display: "block" }} > INSTALLATION GUIDE</a>
                            <img src={`/static/images/app-download/apple-logo.png`} style={{ height: "30px", width: "50px" }} />
                        </div>
                    </div>
                    <div className="col-xs-4 col-md-4"></div>
                    <div className="text-center"><InstallationGuide /></div>
                    <div className="col-xs-6 col-md-7">
                        <DownloadSection />
                    </div>
                </div>
                <ScrollToTop smooth />
            </div >
        );
    }

    return (
        <div className={Styles["container"]} style={{ background: "#0c558a" }} >
            <div className="row make-columns">
                <div className="col-xs-4 col-md-4"></div>
                <div className="col-xs-4 col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body"><img src={`${imagesPath}2.png`} style={{ height: "60px", width: "200px", margin: "20px" }} /></div>
                    </div>
                </div>
                <div className="col-xs-4 col-md-4"></div>
                <div className="col-xs-6 col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body" style={{ marginLeft: "30px" }}>
                            <br /><img src={`${imagesPath}1.png`} style={{ height: "90px", width: "130px" }} />
                            <br /> + Excellent Online Casino Platform
                            <br /> + Player can choose to play via a <span style={{ color: "#f19706" }}>Web Browser</span>  or <span style={{ color: "#f19706" }}>Mobile App</span>
                            <br /> + More Instant! More Convenient!
                        </div>

                    </div>
                </div>
                <div className="col-xs-6 col-md-7">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h2 style={{ fontWeight: "bold", color: "#f19706" }}>APP DOWNLOAD</h2>
                            <br /><div className="panel-body"><img src={`${imagesPath}3.png`} style={{ height: "50px", width: "200px", marginLeft: "20px" }} /></div>
                            <br /><div className="panel-body"><img src={`${imagesPath}4.png`} style={{ height: "50px", width: "200px", marginLeft: "20px" }} /></div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <br /><div className="panel-body"><img src={`/static/images/app-download/5.png`} style={{ height: "200px", width: "300px", marginBottom: "10px" }} /></div>
                        </div>

                    </div>
                </div>
                <div className="col-xs-6 col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-body" style={{ fontSize: "22px" }}>
                            <br />
                            Offer variety and high Entertainment Game, there is always something <span style={{ color: "#f19706" }}>new to play</span>
                        </div>
                    </div>
                </div>
                <div className="col-xs-4 col-md-4"></div>
                <div className="col-xs-4 col-md-4">
                    <div className="panel panel-default">
                        <a onClick={navigateToInstallationGuide} style={{ fontWeight: "bold", color: "#f19706", cursor: "pointer" }} > INSTALLATION GUIDE</a>
                    </div>
                </div>
                <div className="col-xs-4 col-md-4"></div>
                <div className="text-center"><InstallationGuide /></div>
            </div>
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
