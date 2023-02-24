import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Dashboard from "../components/pages/dashboard";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);

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
            <Dashboard />
        </div>
    );
}

export const getStaticProps = async ({ locale = "en" }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Home;
