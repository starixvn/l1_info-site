import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Markup } from "interweave";
import Styles from "./app-download-page.module.scss";
import { StringFormat } from "../../helpers/string-helper";

const imagesPath = "/static/images/app-download/";
interface GuideContent {
    title: string;
    content: string;
    image: string;
}

const InstallationGuide = () => {
    const guidesData: Array<GuideContent> = [
        {
            title: "Step 1",
            content: "User phone to <span class='{0}'>scan</span> the QR code or Tab on AppStore icon to download",
            image: "Example-step1"
        },
        {
            title: "Step 2",
            content: "Select <span class='{0}'>Get the App</span> to redirect to AppleStore",
            image: "Example-step2"
        },
        {
            title: "Step 3",
            content: "You will redirect to <span class='{0}'>App Name</span> on AppStore instead of 'Saba Game'. Tap on <span>Get</span> to install 'App Name' app",
            image: "Example-step3"
        },
        {
            title: "Step 4",
            content: "Open <span class='{0}'>App Name</span> to launch the 'Saba Game' app",
            image: "Example-step4"
        },
        {
            title: "Step 5",
            content: "Please use the betting account given by your Upline to login",
            image: "Example-step5"
        }
    ];

    const [guides, setGuides] = useState<Array<GuideContent>>();
    useEffect(() => setGuides(guidesData), []);

    return (
        <div className={`row ${Styles["steps"]}`}>
            <div className="col-xs-1 col-md-1" ></div>
            {
                guides && guides.map((guide, index) => {
                    return <div className={`col-xs-2 col-md-2 text-center ${Styles["step"]}`} key={index} >
                        <div className={`${Styles["content"]}`}>
                            <div ><span className={Styles["title"]}> {guide.title}</span></div>
                            <div ><span className={Styles["detail"]}>{<Markup content={StringFormat(guide.content, Styles["highlight-text"])} />} </span></div>
                        </div>
                        <div className="text-center"> <img src={`${imagesPath}${guide.image}.png`} className="img-fluid" alt="" /> </div>
                    </div>
                })
            }
            <div className="col-xs-1 col-md-1" ></div>
        </div>
    );
};


export default InstallationGuide;
