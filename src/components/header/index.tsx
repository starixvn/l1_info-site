import React from "react";
import Styles from "./header.module.scss";
export const Header: React.FC = () => {   
    return (
        <div id="header" className={Styles["header"]}>       
            <nav className={`${Styles["navbar"]} ${Styles["navbar-expand"]}`}>                
                <button className={Styles["navbar-toggler"]} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
                    <ul id="top-menu" className={Styles["navbar-nav"]}>
                        <li className={Styles["menu-item"]}><a href="#" aria-current="page">All Games</a></li>
                        <li className={Styles["menu-item"]}><a href="#">Dice Games</a></li>
                        <li className={Styles["menu-item"]}><a href="#">Casino</a></li>
                        <li className={Styles["menu-item"]}><a href="#">Slots</a></li>
                        <li className={Styles["menu-item"]}><a href="#">Others</a></li>
                        <li className={Styles["menu-item"]}><a href="#">Contact Us</a></li>
                    </ul>                   
                </div>
            </nav>         
        </div>
    );
};

export default Header;
