import { useRouter } from "next/router";
import React, { Suspense, useEffect, useRef, useState } from "react";
import "./i18n";

import Dashboard from "../components/pages/dashboard";
import { useTranslation } from "react-i18next";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const { i18n } = useTranslation();
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setIsLoading(false);
        }
    }, [router]);

    useEffect(() => {
        i18n.changeLanguage("en");
    }, []);

    if (isLoading) {
        return <></>;
    }

    return (
        <Suspense fallback={null}>
            <div id="container-home" className="container-home">
                <Dashboard />
            </div>
        </Suspense>
    );
}

export default Home;
