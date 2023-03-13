import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { browserVersion, isIOS, isMobile, isMobileOnly, isDesktop } from "react-device-detect";

import appSettings from "../../../common/app-settings";
import { locales } from "../../../common/constants";
import Styles from "./contact.module.scss";

const PADDING_FORM = 40;
const WIDTH_FORM = {
    desktop: 800,
};

const HEIGHT_FORM = {
    mobile: 1000,
    desktop: 900,
};

const Form: React.FC = () => {
    const { i18n, t } = useTranslation("common");
    const wrapperRef = useRef<HTMLIFrameElement>(null);
    const { googleFormIdEn, googleFormIdVi } = appSettings;
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [id, setId] = useState<string>();
    const handleResize = () => {
        setWidth(+(window.innerWidth - (isDesktop ? PADDING_FORM : 0)));
    };

    useEffect(() => {
        setWidth(isMobile ? window.innerWidth : WIDTH_FORM.desktop);
        setHeight(isMobile ? HEIGHT_FORM.mobile : HEIGHT_FORM.desktop);
        setId(i18n.language === locales.en ? googleFormIdEn : googleFormIdVi);
    }, []);

    useEffect(() => {
        setId(i18n.language === locales.en ? googleFormIdEn : googleFormIdVi);
    }, [i18n.language]);

    useEffect(() => {
        const isIOSBrowserVersion15 = isMobileOnly && isIOS && browserVersion === "15";
        if (!isIOSBrowserVersion15) {
            window.addEventListener("resize", handleResize);
        }

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [wrapperRef]);

    return (
        <div className={Styles["contact-container"]} ref={wrapperRef}>
            <p className={Styles["small-intro"]}></p>
            <div className={Styles["form-container"]}>
                <iframe
                    src={`https://docs.google.com/forms/d/e/${id}/viewform?embedded=true&hl=${i18n.language}`}
                    width={width}
                    height={height}
                >
                    {t("loading")}
                </iframe>
            </div>
        </div>
    );
};

export default Form;
