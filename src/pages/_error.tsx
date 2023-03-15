import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TObjectKeyValue } from "../components/type";
import Image from "next/image";

const errorMsg: TObjectKeyValue = {
    en: "An error has occurred, please contact CSD for details.",
    vi: "Đã xảy ra lỗi. Vui lòng liên hệ với bộ phận CSKH để được hỗ trợ.",
};

const Error = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const locale = router.locale ? router.locale : "en";

    useEffect(() => {
        setIsLoading(false);
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div>
            <div className="error-page">
                <Image className="error-background small" src={`/static/images/error-light.svg`} alt="error" loading="eager" fill />
                <p className="info">{errorMsg[locale]}</p>
            </div>
        </div>
    );
};

export default Error;
