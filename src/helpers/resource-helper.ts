function getTranslationResourceGeneric<T>(langKey: string | undefined, supportedLanguages: { [name: string]: T }, defaultResource: T): T {
    if (langKey) {
        const isLanguageSupport = Object.keys(supportedLanguages).findIndex((key) => key == langKey) >= 0;
        if (isLanguageSupport) {
            return supportedLanguages[langKey];
        }
    }

    return defaultResource;
}

export const getTranslationResource = getTranslationResourceGeneric;
