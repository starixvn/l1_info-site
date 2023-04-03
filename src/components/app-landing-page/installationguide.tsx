import React from "react";
import { Markup } from "interweave";
import Styles from "./app-landing-page.module.scss";
import { StringFormat } from "../../helpers/string-helper";
import { StepDescription } from "./languages/types";
import { buildVersion } from "../../common/constants";

const InstallationGuide: React.FunctionComponent<{ stepsResources: Array<StepDescription>, locale: string, id: string, isAndroid: boolean }> = ({ stepsResources, locale, id, isAndroid }) => {
    const os = isAndroid ? "android" : "ios";
    return (
        <div id={id} role="tabpanel" className={`tab-pane row ${Styles["steps"]}`}>
            <div className="col-lg-1 col-xl-1" ></div>
            {
                stepsResources.map((guide, index) => {
                    return <div className={`col-xs-2 col-md-4 col-lg-2 col-xl-2 text-center ${Styles["step"]}`} key={index} >
                        <div className={`${Styles["content"]}`}>
                            <div ><span className={`${Styles["title"]} ${Styles[locale === "th" ? "padding" : ""]}`}> {guide.title}</span></div>
                            <div ><span className={Styles["detail"]}>{<Markup content={StringFormat(guide.content[os], Styles["highlight-text"])} />} </span></div>
                        </div>
                        <img src={`/static/images/app-download/${os}-${guide.image}.png?v=${buildVersion}`} className="img-fluid" alt="" />
                    </div>
                })
            }
            <div className="col-lg-1 col-xl-1 " ></div>
        </div>
    );
}

export default InstallationGuide;
