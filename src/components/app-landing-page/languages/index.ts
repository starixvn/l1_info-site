import { IAppLandingPageResource } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./cn";
import { tw } from "./tw";
import { vi } from "./vi";
import { getTranslationResource } from "../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: IAppLandingPageResource } = {
    en: en,
    th: th,
    id: id,
    zh_cn: cn,
    zh_tw: tw,
    vi,
};

export const getAppDownloadPageTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IAppLandingPageResource>(langKey, supportedLanguages, en);
};
