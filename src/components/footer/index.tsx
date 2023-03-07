import React from "react";
import { useTranslation } from "next-i18next";

const Footer = () => {
    const { t } = useTranslation("common");
    return (
        <footer className="footer">
            © {t<string>("copyright")} {new Date().getUTCFullYear()} {t<string>("sabaGames")}
        </footer>
    );
};
export default Footer;
