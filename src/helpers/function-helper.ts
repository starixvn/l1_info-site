import { languageSupport, locales } from "../common/constants";

const getKeyByValue = (object: Record<string, string>, value: string) => {
    return Object.keys(object).find((key) => object[key] === value) ?? 0;
};

const randomString = (str: string, length: number) => {
    const arr = str.split("");
    let shuffled = "";
    let currentIndex = arr.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        const randomIndex = Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1)) * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    // Take the first `length` characters of the shuffled array
    shuffled = arr.slice(0, length).join("");
    return shuffled;
};

const isEmail = (email: string) => {
    const regex = "[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*";
    return new RegExp(`^${regex}$`).test(email);
};

const getLocale = (locale: string | undefined) => {
    if (locale && !languageSupport.includes(locale)) {
        return locales.en;
    }

    return locale || locales.en;
};

export { getKeyByValue, randomString, isEmail, getLocale };
