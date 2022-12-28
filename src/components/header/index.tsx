import React from "react";
import Data from "../data";
import Styles from "./header.module.scss";
export const Header: React.FC<{ handleSelectGameType: Function; setItem: Function; menuItems: string[] }> = ({
    handleSelectGameType,
    setItem,
    menuItems,
}) => {
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
                    <li className={Styles["menu-item"]} onClick={() => setItem(Data)}>
                        <a href="#">All</a>
                    </li>
                    {menuItems.map((gameType: string) => {
                        return (
                            <li className={Styles["menu-item"]} onClick={() => handleSelectGameType(gameType)} key={gameType}>
                                <a href="#">{gameType}</a>
                            </li>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default Header;
