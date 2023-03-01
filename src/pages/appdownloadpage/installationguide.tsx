import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Markup } from "interweave";
import Styles from "./app-download-page.module.scss";
import { StringFormat } from "../../helpers/string-helper";
import { isMobileOnly, isIOS } from "react-device-detect";
import Carousel from 'nuka-carousel';
import { useRouter } from "next/router";

const imagesPath = "/static/images/app-download/";
interface GuideContent {
    title: string;
    content: string;
    image: string;
    width: number;
    height: number;
}

const InstallationGuide = () => {
    const guidesData: Array<GuideContent> = [
        {
            title: "Step 1",
            content: "User phone to <span class='{0}'>scan</span> the QR code or Tab on AppStore icon to download",
            image: "1",
            width: 150,
            height: 50
        },
        {
            title: "Step 2",
            content: "Select <span class='{0}'>Get the App</span> to redirect to AppleStore",
            image: "2",
            width: 250,
            height: 450
        },
        {
            title: "Step 3",
            content: "You will redirect to <span class='{0}'>App Name</span> on AppStore instead of 'Saba Game'. Tap on <span>Get</span> to install 'App Name' app",
            image: "3",
            width: 250,
            height: 450
        },
        {
            title: "Step 4",
            content: "Open <span class='{0}'>App Name</span> to launch the 'Saba Game' app",
            image: "4",
            width: 250,
            height: 450
        },
        {
            title: "Step 5",
            content: "Please use the betting account given by your Upline to login",
            image: "5",
            width: 250,
            height: 450
        }
    ];

    const [guides, setGuides] = useState<Array<GuideContent>>();
    const [isMobile, setIsMobile] = useState<boolean>();
    useEffect(() => setGuides(guidesData), []);
    useEffect(() => setIsMobile(isMobileOnly), []);

    const router = useRouter()
    const navigateToMainPage = () => {
        router.push('/appdownloadpage')
    };

    // if (isMobile) {
    //     return (
    //         <div className={Styles["container"]} style={{ background: "#0c558a", height: "100%" }}>
    //             <Carousel swiping={true}
    //                 className={Styles["slider-frame"]}
    //                 defaultControlsConfig={{
    //                     containerClassName: Styles["paging-dots-container"],
    //                     // pagingDotsContainerClassName: Styles["paging-dots-container"]
    //                 }}
    //                 renderCenterLeftControls={null}
    //                 renderCenterRightControls={null}>
    //                 {
    //                     guides && guides.map((guide, index) => {
    //                         return (<div key={index}>
    //                             <div className={`${Styles["panel"]} ${Styles["panel-default"]}`}>

    //                                 <div style={{ fontWeight: "bold", color: "#f19706", fontSize: "22px" }}>
    //                                     <div className="text-left" style={{ fontWeight: "bold", color: "#f19706", fontSize: "22px" }}>
    //                                         <a onClick={navigateToMainPage} style={{ fontWeight: "bold", textDecoration: "underline", color: "#f19706", cursor: "pointer", marginRight: "50px" }} > BACK</a>
    //                                         INSTALLATION GUIDE
    //                                     </div>

    //                                 </div>
    //                                 <div className={Styles["panel-body"]}>
    //                                     <div className="text-center" style={{ height: "100px" }}>
    //                                         <div><button style={{ fontWeight: "bold" }}>{guide.title}</button></div>
    //                                         <div>{<Markup content={StringFormat(guide.content, Styles["highlight-text"])} />} </div></div>
    //                                     <div className="text-center"><img src={`${imagesPath}guide-${guide.image}.png`} className="img-fluid" /></div>
    //                                 </div>
    //                             </div>
    //                         </div>)
    //                     })
    //                 }
    //             </Carousel></div>
    //     )
    // }

    return (
        <div>
            <div className={`row ${Styles["make-columns"]}`}>
                {
                    guides && guides.map((guide, index) => {
                        return <div className="col-xs-2 col-md-2" key={index} style={{ marginBottom: "10px" }}>
                            <div className={`${Styles["panel"]} ${Styles["panel-default"]}`}>
                                <div className={Styles["panel-body"]}>
                                    <div style={{ height: "150px" }}>
                                        <div><button style={{ fontWeight: "bold", background: "#f19706", color: "black", marginTop: "30px", marginBottom: "10px" }}>{guide.title}</button></div>
                                        <span>{<Markup content={StringFormat(guide.content, Styles["highlight-text"])} />} </span></div>
                                    <div><img src={`${imagesPath}guide-${guide.image}.png`} className="img-fluid" /></div>
                                </div>
                            </div>
                        </div>
                    })
                }
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
export default InstallationGuide;
