import { NextApiResponse } from "next";
import appSettings from "../common/app-settings";
import { GameCategoryName } from "../common/constants";
import { GAMES_CATEGORY } from "../components/data";

const generateSiteMap = () => {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>${appSettings.externalUrl}</loc>
      </url>
      ${Object.values(GameCategoryName)
          .map((category) => generateURL(getCategoryPath(category)))
          .join("")}
      ${GAMES_CATEGORY.map((gameCategory) =>
          Object.keys(gameCategory).map((category) => generateURL(getGameDetailPath(category, gameCategory[category])))
      ).join("")}
    </urlset>
 `;
};

const getCategoryPath = (category: string) => `/category/${category}`;
const getGameDetailPath = (category: string, gameId: number) => `/category/${category}/${gameId}`;

const generateURL = (path: string) => {
    return `<url>
    <loc>${appSettings.externalUrl}${path}</loc>
    <xhtml:link
               rel="alternate"
               hreflang="en-US"
               href="${appSettings.externalUrl}${path}" />
    <xhtml:link
               rel="alternate"
               hreflang="vi-VN"
               href="${appSettings.externalUrl}/vi${path}" />
    </url>
    <url>
    <loc>${appSettings.externalUrl}/vi${path}</loc>
    <xhtml:link
               rel="alternate"
               hreflang="en-US"
               href="${appSettings.externalUrl}${path}" />
    <xhtml:link
               rel="alternate"
               hreflang="vi-VN"
               href="${appSettings.externalUrl}/vi${path}" />
    </url>`;
};

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
    const sitemap = generateSiteMap();
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return {
        props: {},
    };
}

export default SiteMap;
