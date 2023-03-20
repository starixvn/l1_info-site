import React, { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import Script from "next/script";
const content = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.saba.games" },
        { "@type": "ListItem", position: 2, name: "Dices", item: "https://www.saba.games/category/dices" },
    ],
};

const Footer: React.FC<{ setFooterRef?: Function }> = ({ setFooterRef }) => {
    const { t } = useTranslation("common");
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setFooterRef && setFooterRef(footerRef);
    }, []);

    return (
        <footer className="footer" id="footer" ref={footerRef}>
            <Script
                id="app-ld-json"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(content, null, "\t"),
                }}
            />
            © {t<string>("copyright")} {new Date().getUTCFullYear()} {t<string>("sabaGames")}
        </footer>
    );
};
export default Footer;
