import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Data from "../components/data";
import GameItem from "../components/game-item";
import { GameBanner } from "../components/game-banner";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(Data);
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const handleSelectGameType = (gameType: string) => {
        const newItem = Data.filter((newData) => {
            return newData.gameType === gameType;
        });
        setItem(newItem);
    };
    const dataGameType = new Set(Data.flatMap((val) => val.gameType));
    const menuItems = Array.from(dataGameType);

    useEffect(() => {
        if (router.isReady) {
            setIsLoading(false);
        }
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div ref={wrapperRef} id="container-home" className="container-home">
            <Header handleSelectGameType={handleSelectGameType} setItem={setItem} menuItems={menuItems} />
            <div className="main-content">
                <GameBanner />
                <GameItem gameData={item} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
