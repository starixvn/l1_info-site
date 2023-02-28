import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { DropdownButton, Dropdown } from "react-bootstrap";

import Styles from "./languages.module.scss";

const Languages = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("en");
    const country = language === "vi" ? "vi" : "en";

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };
    const flagIcon = `/static/images/icon-languages/${country}.svg`;

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
