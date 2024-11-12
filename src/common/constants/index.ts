import { EGameCategory, EGameType, EVolatility, TObjectKeyValue } from "./../../components/type";
import { ETags } from "../../components/type";
import appSettings from "../app-settings";

const locales = { en: "en", vi: "vi", th: "th", id: "id", zh_cn: "zh_cn", zh_tw: "zh_tw" };
const languageSupport = ["vi", "en"];

export const languageMapper = { "en-US": "en", "vi-VN": "vi" };

export const LanguageLocaleMapper: any = {
    en: "en-US",
    vi: "vi-VN",
    th: "th-TH",
    id: "id-ID",
    zh_cn: "zh-CN",
    zh_tw: "zh-TW",
};
export const LanguageTitle: any = {
    en: "English",
    vi: "Tiếng Việt",
    th: "ภาษาไทย",
    id: "Indonesian",
    zh_cn: "简体中文",
    zh_tw: "繁體中文",
};

const Themes = {
    light: "light",
    infoSite: "info-site",
};

const systemName = appSettings.system.toLocaleLowerCase();

const isL1System = () => {
    return systemName === "l1";
};

const TABLE_GAMES = {
    SE_DIE: 2,
    KENO_PRO_MAX: 8,
    BACCARAT: 10,
    KENO_MAX: 12,
    KENO_MAX_2: 13,
    KENO_MINI: 14,
    KENO_MINI_2: 15,
    KENO_EAST: 16,
    KENO_WEST: 17,
    KENO_SOUTH: 18,
    KENO_NORTH: 19,
    ROULETTE: 21,
    VIP_SE_DIE: 22,
    BLACK_JACK: 23,
    SIC_BO: 25,
    VIP_FISH_PRAWN_CRAB: 26,
    VIP_BACCARAT: 27,
    SE_DIE_WAR: 28,
    FOUR_GUARDIANS: 29,
    LOTTERY: 31,
    THREE_CARDS: 35,
    KENO_MATCH_1: 36,
    KENO_MATCH_2: 37,
    HEROES_SLOT: 38,
    CASINO_HOLDEM_POKER: 39,
    KENO_POWER_1: 40,
    KENO_POWER_2: 41,
    TEXAS_HOLDEM_POKER: 42,
    NIGHCLUB_LADY: 46,
    TREASURE_ISLAND: 47,
    BLOCKCHAIN_BACCARAT: 48,
    MEGA_KENO: 52,
    MEGA_KENO_2: 53,
    WAY_TO_GOAL: 49,
    FRUIT_SLOT: 59,
};

const MINI_GAMES = {
    BIG_SMALL: 1,
    FISH_PRAWN_CRAB: 3,
    TURBO_BIG_SMALL: 4,
    TURBO_ODD_EVEN: 6,
    DRAGON_TIGER: 7,
    MINI_SE_DIE: 9,
    SPECIAL_SE_DIE: 24,
    BITCOIN_MASTER: 43,
    HILO: 45,
    UNBALANCEDBIGSMALL1: 50,
    MINI_SE_DIE_2: 56,
    MINI_SE_DIE_3: 57,
    MINI_SE_DIE_4: 58,
};

const GAMES = { ...TABLE_GAMES, ...MINI_GAMES }; 

export const isGameIdInMiniGames = (gameId: number) => {
    return Object.values(MINI_GAMES).includes(gameId);
};

const buildVersion = process.env.buildVersion;

const TagsName: TObjectKeyValue = {
    [ETags.RoundBased]: "roundBased",
    [ETags.Classic25PayLines]: "classic25PayLines",
    [ETags.Cascading5x6]: "cascading5x6",
    [ETags.TurnBased]: "turnBased",
};

const GameTypeName: TObjectKeyValue = {
    [EGameType.AllGames]: "allGames",
    [EGameType.DiceGame]: "diceGame",
    [EGameType.Roulette]: "roulette",
    [EGameType.CardGame]: "cardGame",
    [EGameType.Slot]: "slot",
    [EGameType.Lottery]: "lottery",
    [EGameType.Others]: "others",
};

const GameVolatility: TObjectKeyValue = {
    [EVolatility.Medium]: "medium",
    [EVolatility.MediumHigh]: "medium-high",
};

const GameCategoryName: TObjectKeyValue = {
    [EGameCategory.AllGames]: "allGames",
    [EGameCategory.Dices]: "dices",
    [EGameCategory.Casino]: "casino",
    [EGameCategory.Slots]: "slots",
    [EGameCategory.Others]: "others",
};

export {
    locales,
    Themes,
    GAMES,
    systemName,
    buildVersion,
    TagsName,
    GameTypeName,
    GameCategoryName,
    GameVolatility,
    languageSupport,
    MINI_GAMES,
};
