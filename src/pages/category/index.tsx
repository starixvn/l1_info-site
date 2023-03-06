import { useEffect } from "react";
import { useRouter } from "next/router";

import { GameCategoryName } from "../../common/constants";

const Category = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            router.push(`/category/${GameCategoryName[0]}`);
        }
    }, [router]);
};

export default Category;
