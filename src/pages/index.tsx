import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../components/header";
import Footer from "../components/footer";
import Data from "../components/data";
import { GameBanner } from "../components/game-banner";
import GameItems from "../components/game-items";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(Data);
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleSetGameCategory = (gameCategory: number) => {
        const newItem = Data.filter((newData) => {
            return newData.gameCategory === gameCategory;
        });
        setItem(newItem);
    };
    const dataGameType = new Set(Data.flatMap((val) => val.gameCategory));
    const menuItems = Array.from(dataGameType).sort();
    useEffect(() => {
        if (router.isReady) {
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div ref={wrapperRef} id="container-home" className="container-home">
            <Header handleSetGameCategory={handleSetGameCategory} setItem={setItem} menuItems={menuItems} />
            <div className="main-content">
                <GameBanner />
                <GameItems gameData={item} />
            </div>
            <Footer />
        </div>
    );
}

export const getStaticProps = async ({ locale = "en" }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Home;
