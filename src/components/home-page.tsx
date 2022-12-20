import React from "react";
import GameItem from "./game-item";
export const HomePage: React.FC = () => {   
    return (
        <div className="main-content">
            <section className="banner-top">
                <img className="img" src="/static/images/game-banner.jpg" alt="bg"></img>                
            </section>

            <section className="container list-container">                      
                <GameItem></GameItem>
            </section>
        </div>
    );
};

export default HomePage;
