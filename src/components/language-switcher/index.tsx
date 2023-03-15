import React from "react";
import { useRouter } from "next/router";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import Styles from "./languages.module.scss";

const Languages = () => {
    const router = useRouter();
    const { i18n } = useTranslation();
    const flagIcon = `/static/images/icon-languages/${router.locale}.svg`;

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        router.push(router.pathname, router.asPath, { locale: lang });
    };

    return (
        <div className={Styles["language-container"]}>
            <Image className={Styles.flag} src={flagIcon} alt="game-icon" width={36} height={34} />
            <DropdownButton className={Styles.dropdown} title={router.locale} variant="dark">
                <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("vi")}>
                    <Image className={Styles.flag} src="/static/images/icon-languages/vi.svg" alt="game-icon" width={36} height={26} />
                    VI
                </Dropdown.Item>
                <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("en")}>
                    <Image className={Styles.flag} src="/static/images/icon-languages/en.svg" alt="game-icon" width={36} height={26} />
                    EN
                </Dropdown.Item>
            </DropdownButton>
        </div>
    );
};
export default Languages;
