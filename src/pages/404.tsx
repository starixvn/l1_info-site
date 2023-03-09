import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const _404 = () => {
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
            <img className="error-background small" src={`/static/images/error-light.svg`} alt="error" />
            <p className="info">404</p>
            <Link href="/">Go back home</Link>
        </div>
    );
};

export default _404;
