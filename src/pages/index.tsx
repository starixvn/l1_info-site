import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Dashboard from "../components/pages/dashboard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading) {
        return <></>;
    }

    return <Dashboard />;
}

export const getStaticProps = async ({ locale = "en" }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common", "detail"])),
    },
});

export default Home;
