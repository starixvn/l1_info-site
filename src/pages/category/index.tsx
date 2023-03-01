import { useEffect } from "react";
import { useRouter } from "next/router";

import { GameCategoryRouter } from "../../common/constants";

const PageCategory = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            router.push(`/category/${GameCategoryRouter[0]}`);
        }
    }, [router]);
};

export default PageCategory;
