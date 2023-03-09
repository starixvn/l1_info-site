import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { GameCategoryName } from "../../../common/constants";

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            router.push(`/category/${GameCategoryName[0]}`);
        }
    }, [router]);

    return <></>;
};

export default Dashboard;
