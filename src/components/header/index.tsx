import React, { useState } from "react";
import { useRouter } from "next/router";

import Styles from "./header.module.scss";
import { useTranslation } from "next-i18next";
import Languages from "../language-switcher";
import Link from "next/link";
import { GameCategoryName } from "../../common/constants";
import { ECategoryOther } from "../type";

type THeaderProps = {
    isOpenGameGuide: boolean;
    menuItems?: number[];
    category?: number;
};
export const Header: React.FC<THeaderProps> = ({ menuItems, category = 0, isOpenGameGuide }) => {
    const [selectCategory, setSelectCategory] = useState<number>(category);
    const { t } = useTranslation("common");
    const router = useRouter();

    const onSelectCategory = (gameCategory: number) => {
        setSelectCategory(gameCategory);
    };

    return (
        <div id="header" className={Styles["header"]}>
            <nav className={`${Styles["navbar"]} ${Styles["navbar-expand"]}`}>
                <Link className="navbar-brand" href={"/"}>
                    <img className={Styles.logo} src={`/static/images/logo.svg?v=1`} alt="logo"></img>
                </Link>
                <div className={`${Styles["navbar-collapse"]} ${Styles["collapse"]}`} id="navbarNavDropdown">
                    {!isOpenGameGuide && (
                        <div className={Styles["category-container"]}>
                            <ul className={Styles["category-list"]}>
                                {menuItems &&
                                    menuItems.map((gameCategory: number, index) => {
                                        const name = GameCategoryName[gameCategory];
                                        return (
                                            <li
                                                className={`${Styles["menu-item"]} ${
                                                    index === selectCategory ? Styles["menu-selected"] : ""
                                                }`}
                                                onClick={() => onSelectCategory(gameCategory)}
                                                key={gameCategory}
                                            >
                                                <Link className={Styles["menu-text"]} href="/category/[category]" as={`/category/${name}`}>
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
                                    <Link className={Styles["menu-link"]} href="/contact">
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
