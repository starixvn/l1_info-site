import React, { useEffect, useRef } from "react";
import { Markup } from "interweave";
import Styles from "./app-landing-page.module.scss";
import { StringFormat } from "../../helpers/string-helper";
import { Devices, StepDescription } from "./languages/types";
import { buildVersion } from "../../common/constants";
import { isMobileOnly } from "react-device-detect";

export interface InstallationGuideProps {
    stepsResources: Array<StepDescription>;
    locale: string;
    device: Devices;
    isActive: boolean;
}

const InstallationGuide: React.FunctionComponent<InstallationGuideProps> = ({ stepsResources, locale, isActive, device }) => {
    const divRefs = useRef<Array<any>>([]);

    useEffect(() => {
        const handleResize = () => {
            if (!isMobileOnly) {
                divRefs.current.forEach(ref => ref.style.height = "auto");
                const paddingBottom = 10;
                const divHeights = divRefs.current.map(ref => ref.getBoundingClientRect().height);
                const maxHeight = Math.max(...divHeights);
                divRefs.current.forEach(ref => ref.style.height = `${maxHeight + paddingBottom}px`);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [isActive]);

    return (
        <div role="tabpanel" className={`tab-pane row ${Styles["steps"]}`}>
            <div className="col-lg-1 col-xl-1" ></div>
            {
                stepsResources.map((guide, index) => {
                    return <div className={`col-xs-2 col-md-4 col-lg-2 col-xl-2 text-center ${Styles["step"]}`} key={index} >
                        <div className={`${Styles["content"]} ${Styles[locale]}`} >
                            <div className={`${Styles["title"]} ${Styles[locale === "th" ? "padding" : ""]}`}> {guide.title}</div>
                            <div ref={(el) => (divRefs.current[index] = el)} className={Styles["detail"]}>
                                {
                                    <Markup content={StringFormat(guide.content[device], Styles["highlight-text"])} />
                                }
                            </div>
                        </div>
                        <img src={`/static/images/app-download/${device}-${guide.image}.png?v=${buildVersion}`} className="img-fluid" alt="" />
                    </div>
                })
            }
            <div className="col-lg-1 col-xl-1 " ></div>
        </div>
    );
}

export default InstallationGuide;
