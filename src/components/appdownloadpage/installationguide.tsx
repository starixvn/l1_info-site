import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Markup } from "interweave";
import Styles from "./app-download-page.module.scss";
import { StringFormat } from "../../helpers/string-helper";
import { IAppDownloadPageResource } from "./languages/types";

const imagesPath = "/static/images/app-download/";

const InstallationGuide: React.FunctionComponent<{ resources: IAppDownloadPageResource }> = ({ resources }) => {
    return (
        <div className={`row ${Styles["steps"]}`}>
            <div className="col-xs-1 col-md-1" ></div>
            {
                resources.steps.map((guide, index) => {
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
}

export default InstallationGuide;
