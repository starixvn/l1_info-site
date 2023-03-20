import React, { useEffect, useRef, useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Styles from "./header.module.scss";
import { GameCategoryName } from "../../common/constants";
import { ECategoryOther } from "../type";
import Image from "next/legacy/image";
const Languages = dynamic(() => import("../language-switcher"));

type THeaderProps = {
    isOpenGameGuide: boolean;
    menuItems?: number[];
    category?: number;
};
export const Header: React.FC<THeaderProps> = ({ menuItems, category = 0, isOpenGameGuide }) => {
    const [selectCategory, setSelectCategory] = useState<number>(category);
    const { t } = useTranslation("common");
    const wrapperRef = useRef<HTMLDivElement>(null);

    const onSelectCategory = (gameCategory: number) => {
        setSelectCategory(gameCategory);
    };

    useEffect(() => {
        if (wrapperRef?.current && isMobileOnly && !isOpenGameGuide) {
            wrapperRef.current.scrollLeft =
                (menuItems && menuItems.findIndex((category) => category === menuItems[selectCategory]) * 100 - 100) || 0;
        }
    }, [wrapperRef?.current, selectCategory]);

    return (
        <div id="header" className={Styles["header"]}>
            <nav className={`${Styles["navbar"]} ${Styles["navbar-expand"]}`}>
                <Link className="navbar-brand" href={"/"}>
                    <div className={Styles["logo-container"]}>
                        <Image
                            className={Styles.logo}
                            src={`/static/images/logo.svg`}
                            alt="logo"
                            layout="responsive"
                            width={19.4}
                            height={80}
                            loading="eager"
                        />
                    </div>
                </Link>

                <div className={`${Styles["navbar-collapse"]} ${Styles["collapse"]}`} id="navbarNavDropdown">
                    {!isOpenGameGuide && (
                        <div ref={wrapperRef} className={Styles["category-container"]}>
                            <ul className={Styles["category-list"]}>
                                {menuItems &&
                                    menuItems.map((gameCategory: number, index) => {
                                        const name = GameCategoryName[gameCategory];
                                        return (
                                            <li
                                                className={`${Styles["menu-item"]} ${
                                                    index === selectCategory ? Styles["menu-selected"] : ""
                                                }`}
                                                key={gameCategory}
                                            >
                                                <Link
                                                    className={Styles["menu-text"]}
                                                    href="/category/[category]"
                                                    as={`/category/${name}`}
                                                    onClick={() => onSelectCategory(gameCategory)}
                                                >
                                                    {t<string>(`common:category-${name}`)}
                                                </Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                            <div className={Styles["category-overlay"]}></div>
                        </div>
                    )}

                    <div className="d-flex align-items-center">
                        {!isOpenGameGuide && (
                            <div
                                className={`${Styles["menu-item"]} ${Styles["menu-contact"]} ${
                                    selectCategory === ECategoryOther.contactUS ? Styles["menu-selected"] : ""
                                }`}
                                onClick={() => onSelectCategory(ECategoryOther.contactUS)}
                            >
                                <span className={`${Styles["menu-text"]}`}>
                                    <Link className={Styles["menu-link"]} href="/contact" aria-label="Link to Contact page">
                                        <span className={Styles["icon-contact"]} />
                                        <span className={Styles["text-contact"]}>{t<string>("contact")}</span>
                                    </Link>
                                </span>
                            </div>
                        )}

                        <div className={Styles["header-language"]}>
                            <Languages />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
