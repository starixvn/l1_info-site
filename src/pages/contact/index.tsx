import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";

import { TPropsBase } from "../../components/pageBase";
import ContactInfo from "../../components/pages/contact-us";
import { ECategoryOther } from "../../components/type";
import { useRouter } from "next/router";

const Contact = (props: TPropsBase) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (router.isReady) {
            setIsLoading(false);
        }
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }

    return <ContactInfo {...props} />;
};

const getStaticProps = async ({ locale = "en" }) => {
    const translations = await serverSideTranslations(locale, ["common", "detail"]);

    return { props: { category: ECategoryOther.contactUS, ...translations } };
};

export { Contact as default, getStaticProps };
