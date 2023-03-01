import { useRouter } from "next/router";
import { useEffect } from "react";

import { GameCategoryRouter } from "../../../common/constants";

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            router.push(`/category/${GameCategoryRouter[0]}`);
        }
    }, [router]);

    return <></>;
};

export default Dashboard;
