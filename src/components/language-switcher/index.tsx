import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import Styles from "./languages.module.scss";

const Languages = () => {
    const router = useRouter();
    const { i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        router.push(router.pathname, router.asPath, { locale: lang });
    };

    useEffect(() => {
        if (router.isReady) {
            setIsLoading(false);
        }
    }, [router.isReady]);

    return useMemo(() => {
        if (isLoading) {
            return <></>;
        }
        const flagIcon = `/static/images/icon-languages/${i18n.language}.svg`;
        return (
            <div className={Styles["language-container"]}>
                <Image className={Styles.flag} src={flagIcon} alt="game-icon" width={36} height={34} />
                <DropdownButton className={Styles.dropdown} title={i18n.language} variant="dark">
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
    }, [i18n.language, isLoading]);
};

export default Languages;
