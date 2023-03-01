import React from "react";
import { useTranslation } from "next-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return <footer className="footer">{t<string>("copyright")}</footer>;
};
export default Footer;
