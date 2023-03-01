import React, { useState } from "react";

import Data from "../data";
import Styles from "./header.module.scss";
import { useTranslation } from "next-i18next";
import Languages from "../language-switcher";
import Link from "next/link";
import { GameCategory } from "../type";
import { GameCategoryRouter } from "../../common/constants";

export const Header: React.FC<{ handleSetGameCategory: Function; setItem: Function; menuItems: number[]; category: number }> = ({
    handleSetGameCategory,
    setItem,
    menuItems,
    category = 0,
}) => {
    const [selectCategory, setSelectCategory] = useState<number>(category);
    const { t } = useTranslation("common");

    const onSelectCategory = (gameCategory: number) => {
        setSelectCategory(gameCategory);
        if (gameCategory === GameCategory.AllGames) {
            setItem(Data);
            return;
        }

        handleSetGameCategory(gameCategory);
    };

    return (
        <div id="header" className={Styles["header"]}>
            <nav className={`${Styles["navbar"]} ${Styles["navbar-expand"]}`}>
                <a className="navbar-brand" href="#">
                    <img className={Styles.logo} src="/static/images/logo.svg" alt="logo"></img>
                </a>
                <div className={`${Styles["navbar-collapse"]} ${Styles["collapse"]}`} id="navbarNavDropdown">
                    <div className={Styles["category-container"]}>
                        <ul className={Styles["category-list"]}>
                            {menuItems.map((gameCategory: number, index) => {
                                return (
                                    <li
                                        className={`${Styles["menu-item"]} ${index === selectCategory ? Styles["menu-selected"] : ""}`}
                                        onClick={() => onSelectCategory(gameCategory)}
                                        key={gameCategory}
                                    >
                                        <Link
                                            className={Styles["menu-text"]}
                                            href="/category/[category]"
                                            as={`/category/${GameCategoryRouter[gameCategory]}`}
                                        >
                                            {t(`common:category-${gameCategory}`)}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className={Styles["category-overlay"]}></div>
                    </div>

                    <div className="d-flex">
                        <div
                            className={`${Styles["menu-item"]} ${selectCategory === -2 ? Styles["menu-selected"] : ""}`}
                            onClick={() => onSelectCategory(-2)}
                        >
                            <span className={Styles["menu-text"]}>
                                <Link className={Styles["menu-link"]} href="/contact">
                                    <span className={Styles["icon-contact"]} />
                                    <span className="d-none d-sm-none d-md-inline-block">{t<string>("contact")}</span>
                                </Link>
                            </span>
                        </div>

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
