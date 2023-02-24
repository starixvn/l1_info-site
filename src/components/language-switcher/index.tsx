import React from "react";
import Styles from "./languages.module.scss";
export const Languages: React.FC = () => {
    return (
        <div className={Styles["language-container"]}>
            <img className="icon-bg" src="/static/images/icon-languages/vi.svg" alt="game-icon"></img>
            <span>VN</span>
        </div>
    );
};
export default Languages;
