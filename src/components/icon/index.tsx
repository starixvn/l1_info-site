import Image from "next/image";
import React from "react";

const LanguageIcons: React.FC = () => {
    return (
        <span className="icon-cn">
            {["en", "vi", "cn", "th", "id"].map((name) => {
                return (
                    <Image
                        key={name}
                        className="icon-bg"
                        src={`/static/images/icon-languages/${name}.svg`}
                        alt="game-icon"
                        width={47}
                        height={34}
                    />
                );
            })}
        </span>
    );
};

export default LanguageIcons;
