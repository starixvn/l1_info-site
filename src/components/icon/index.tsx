import React from "react";

const LanguageIcons: React.FC = () => {
    return (
        <span className="icon-cn">
            {["en", "vi", "cn", "th", "id"].map((name) => {
                return <img key={name} className="icon-bg" src={`/static/images/icon-languages/${name}.svg`} alt="game-icon"></img>;
            })}
        </span>
    );
};

export default LanguageIcons;
