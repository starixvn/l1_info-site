import Image from "next/image";
import React from "react";

const LanguageIcons: React.FC = () => {
    const icons = ["en", "vi", "zh_cn", "th", "id"];
    return (
        <span className="group-icon-languages">
            {icons.map((name) => {
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
