import React, { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";

const Footer: React.FC<{ setFooterRef?: Function }> = ({ setFooterRef }) => {
    const { t } = useTranslation("common");
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setFooterRef && setFooterRef(footerRef);
    }, []);

    return (
        <footer className="footer" id="footer" ref={footerRef}>
            © {t<string>("copyright")} {new Date().getUTCFullYear()} {t<string>("sabaGames")}
        </footer>
    );
};
export default Footer;
