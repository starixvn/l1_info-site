import { IAppLandingPageResource } from "./types";
import { th } from "./th";
import { en } from "./en";
import { id } from "./id";
import { cn } from "./cn";
import { tw } from "./tw";
import { vi } from "./vi";
import { getTranslationResource } from "../../../helpers/resource-helper";

const supportedLanguages: { [name: string]: IAppLandingPageResource } = {
    en,
    th,
    id,
    cn,
    tw,
    vi,
};

export const getAppDownloadPageTranslationResource = (langKey: string | undefined) => {
    return getTranslationResource<IAppLandingPageResource>(langKey, supportedLanguages, en);
};
