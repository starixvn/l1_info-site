import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return <footer className="footer">{t<string>("copyright")}</footer>;
};
export default Footer;
