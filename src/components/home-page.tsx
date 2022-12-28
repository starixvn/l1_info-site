import React, { useState } from "react";
import GameItem from "./game-item";
import Data from "./data";
import { buildVersion } from "../common/constants";
import { GameCategory } from "./game-banner";

export const HomePage: React.FC = () => {
    const [item, setItem] = useState(Data);
    const filterItem = (gameType: string) => {
        const newItem = Data.filter((newData) => {
            return newData.gameType === gameType;
        });
        setItem(newItem);
    };
    const dataGameType = new Set(Data.flatMap((val) => val.gameType));
    const menuItems = Array.from(dataGameType);
    return (
        <div className="main-content">
            <section className="banner-top">
                <img className="img" src={`/static/images/game-banner.jpg?v=${buildVersion}`} alt="bg"></img>
            </section>
            <GameCategory filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
            <GameItem gameData={item} />
        </div>
    );
};

export default HomePage;
