import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { i18n } from "next-i18next";

import Styles from "./languages.module.scss";

const Languages = () => {
    const router = useRouter();
    const [language, setLanguage] = useState<string>("en");
    const country = language === "vi" ? "vi" : "en";
    const flagIcon = `/static/images/icon-languages/${country}.svg`;

    const handleLanguageChange = (lang: string) => {
        console.log(lang);
        setLanguage(lang);
        i18n && i18n.changeLanguage(lang);
        router.push(router.pathname, router.asPath, { locale: lang });
    };

    return (
        <div className={Styles["language-container"]}>
            <img className={Styles.flag} src={flagIcon} alt="game-icon"></img>
            <DropdownButton className={Styles.dropdown} title={country} variant="dark">
                <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("vi")}>
                    <img className={Styles.flag} src="/static/images/icon-languages/vi.svg" alt="game-icon"></img>VI
                </Dropdown.Item>
                <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("en")}>
                    <img className={Styles.flag} src="/static/images/icon-languages/en.svg" alt="game-icon"></img>EN
                </Dropdown.Item>
            </DropdownButton>
        </div>
    );
};
export default Languages;
