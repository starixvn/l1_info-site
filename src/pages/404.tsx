import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Custom404 = () => {
    const { theme } = useTheme();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div className="error-page">
            <img className="error-background small" src={`/static/images/error-${theme}.svg`} alt="error" />
            <p className="info">404</p>
        </div>
    );
};

export default Custom404;
