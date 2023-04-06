import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import Styles from "./languages.module.scss";
import { LanguageTitle } from "../../common/constants";

const Languages = () => {
    const router = useRouter();
    const { i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    const handleLanguageChange = async (lang: string) => {
        router.push(router.pathname, router.asPath, { locale: lang, shallow: true }).then(() => {
            router.reload();
        });
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
                <DropdownButton className={Styles.dropdown} title={LanguageTitle[i18n.language]} variant="dark">
                    <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("en")}>
                        <Image className={Styles.flag} src="/static/images/icon-languages/en.svg" alt="game-icon" width={36} height={26} />
                        {LanguageTitle.en}
                    </Dropdown.Item>
                    <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("vi")}>
                        <Image className={Styles.flag} src="/static/images/icon-languages/vi.svg" alt="game-icon" width={36} height={26} />
                        {LanguageTitle.vi}
                    </Dropdown.Item>
                    <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("zh_tw")}>
                        <Image
                            className={Styles.flag}
                            src="/static/images/icon-languages/zh_tw.svg"
                            alt="game-icon"
                            width={36}
                            height={26}
                        />
                        {LanguageTitle.zh_tw}
                    </Dropdown.Item>
                    <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("zh_cn")}>
                        <Image
                            className={Styles.flag}
                            src="/static/images/icon-languages/zh_cn.svg"
                            alt="game-icon"
                            width={36}
                            height={26}
                        />
                        {LanguageTitle.zh_cn}
                    </Dropdown.Item>
                    <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("th")}>
                        <Image className={Styles.flag} src="/static/images/icon-languages/th.svg" alt="game-icon" width={36} height={26} />
                        {LanguageTitle.th}
                    </Dropdown.Item>
                    <Dropdown.Item className={Styles.item} onClick={() => handleLanguageChange("id")}>
                        <Image className={Styles.flag} src="/static/images/icon-languages/id.svg" alt="game-icon" width={36} height={26} />
                        {LanguageTitle.id}
                    </Dropdown.Item>
                </DropdownButton>
            </div>
        );
    }, [i18n.language, isLoading]);
};

export default Languages;
