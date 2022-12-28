import React from "react";
import { buildVersion } from "../../common/constants";

export const GameBanner: React.FC = () => {
    return (
        <section className="banner-top">
            <img className="img" src={`/static/images/game-banner.jpg?v=${buildVersion}`} alt="bg"></img>
        </section>
    );
};
