import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { IObjectKeys } from "../common/constants";

const errorMsg: IObjectKeys = {
    en: "An error has occurred, please contact CSD for details.",
    vi: "Đã xảy ra lỗi. Vui lòng liên hệ với bộ phận CSKH để được hỗ trợ.",
};

const Error = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const locale = router.locale ? router.locale : "en";
    const { theme } = useTheme();

    useEffect(() => {
        setIsLoading(false);
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div>
            <div className="error-page">
                <img className="error-background small" src={`/static/images/error-${theme}.svg`} alt="error" />
                <p className="info">{errorMsg[locale]}</p>
            </div>
        </div>
    );
};

export default Error;
