import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useTranslation } from "next-i18next";

import { TPropsBase } from "../../components/pageBase";
import ContactComponent from "../../components/pages/contact-us";
import { ECategoryOther } from "../../components/type";

const Contact = (props: TPropsBase) => {
    const data = { ...props, ...useTranslation("common") };

    return <ContactComponent {...data} />;
};

const getStaticProps = async ({ locale = "en" }) => {
    const translations = await serverSideTranslations(locale, ["common", "detail"]);

    return { props: { category: ECategoryOther.contactUS, ...translations } };
};

export { Contact as default, getStaticProps };
