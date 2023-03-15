import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

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
            <Image className="error-background small" src={`/static/images/error-light.svg`} alt="error" loading="eager" fill />
            <p className="info">404</p>
            <Link href="/">Go back home</Link>
        </div>
    );
};

export default _404;
