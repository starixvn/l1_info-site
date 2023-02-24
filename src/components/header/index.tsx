import React, { useState } from "react";
import Data from "../data";
import Styles from "./header.module.scss";
import { useTranslation } from "next-i18next";
import Languages from "../language-switcher";

const Link = (item: any) => {
    return (
        <a href="#" className="menu__link">
            {item}
        </a>
    );
};

const MenuItem = (props: { active: any; className: string; item: any; clicked: any }) => {
    const { active, className, item, clicked } = props;
    const cName = !active ? className : `${className} menu__item_active`;
    const handleOnClick = () => {
        props.clicked();
    };
    return (
        <li className={cName} onClick={clicked && handleOnClick()}>
            <Link item={item} className="Linklink" />
        </li>
    );
};

export const Header: React.FC<{ handleSetGameCategory: Function; setItem: Function; menuItems: number[] }> = ({
    handleSetGameCategory,
    setItem,
    menuItems,
}) => {
    const [selectCategory, setSelectCategory] = useState<number>(-1);
    const { t } = useTranslation();
    const onSelectCategory = (gameCategory: number) => {
        handleCategorySelected(gameCategory);
        handleSetGameCategory(gameCategory);
    };
    const handleCategorySelected = (i: number) => {
        setSelectCategory(i);
    };

    const handleOtherCategory = (i: number) => {
        setItem(Data);
        setSelectCategory(i);
    };

    return (
        <div id="header" className={Styles["header"]}>
            <nav className={`${Styles["navbar"]} ${Styles["navbar-expand"]}`}>
                <button
                    className={Styles["navbar-toggler"]}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <a className="navbar-brand" href="#">
                    <img className="img-fluid logo" src="/static/images/logo.svg" alt="logo"></img>
                </a>
                <div className={`${Styles["navbar-collapse"]} ${Styles["collapse"]}`} id="navbarNavDropdown">
                    <ul className={Styles["category-container"]}>
                        <li
                            className={`${Styles["menu-item"]} ${selectCategory === -1 ? Styles["menu-selected"] : ""}`}
                            onClick={() => handleOtherCategory(-1)}
                        >
                            <span className={Styles["menu-text"]}>All Games</span>
                        </li>
                        {menuItems.map((gameCategory: number, index) => {
                            return (
                                <li
                                    className={`${Styles["menu-item"]} ${index === selectCategory ? Styles["menu-selected"] : ""}`}
                                    onClick={() => onSelectCategory(gameCategory)}
                                    key={gameCategory}
                                >
                                    <span className={Styles["menu-text"]}>{t(`category-${gameCategory}`)}</span>
                                </li>
                            );
                        })}
                    </ul>

                    <div
                        className={`${Styles["menu-item"]} ${selectCategory === -2 ? Styles["menu-selected"] : ""}`}
                        onClick={() => handleOtherCategory(-2)}
                    >
                        <span className={Styles["menu-text"]}>Contact Us</span>
                    </div>

                    <div className={Styles["menu-item"]}>
                        <Languages />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
