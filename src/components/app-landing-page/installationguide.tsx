import React from "react";
import { Markup } from "interweave";
import Styles from "./app-landing-page.module.scss";
import { StringFormat } from "../../helpers/string-helper";
import { IAppLandingPageResource } from "./languages/types";

const InstallationGuide: React.FunctionComponent<{ resources: IAppLandingPageResource, }> = ({ resources }) => {
    return (
        <div className={`row ${Styles["steps"]}`}>
            <div className="col-lg-1 col-xl-1" ></div>
            {
                resources.steps.map((guide, index) => {
                    return <div className={`col-xs-2 col-md-4 col-lg-2 col-xl-2 text-center ${Styles["step"]}`} key={index} >
                        <div className={`${Styles["content"]}`}>
                            <div ><span className={Styles["title"]}> {guide.title}</span></div>
                            <div ><span className={Styles["detail"]}>{<Markup content={StringFormat(guide.content, Styles["highlight-text"])} />} </span></div>
                        </div>
                        <img src={`/static/images/app-download/${guide.image}.png`} className="img-fluid" alt="" />
                    </div>
                })
            }
            <div className="col-lg-1 col-xl-1 " ></div>
        </div>
    );
}

export default InstallationGuide;
