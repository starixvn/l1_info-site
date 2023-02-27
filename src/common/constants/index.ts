import { GameCategory, GameType } from "./../../components/type";
import { ITags } from "../../components/type";

export interface IObjectKeys {
    [key: string]: string;
}

export const locales = { en: "en", vi: "vi", th: "th", id: "id", zh_cn: "zh_cn", zh_tw: "zh_tw" };

export const languageMapper = { "en-US": "en", "vi-VN": "vi", "th-TH": "th", "id-ID": "id", "zh-CN": "zh_cn", "zh-TW": "zh_tw" };
export const LanguageLocaleMapper = {
    en: "en-US",
    vi: "vi-VN",
    th: "th-TH",
    id: "id-ID",
    zh_cn: "zh-CN",
    zh_tw: "zh-TW",
};

export const languageNameMapper = { en: "English", vi: "Tiếng Việt" };
export const Themes = {
    light: "light",
};

export const GAMES = {
    BIG_SMALL: 1,
    SE_DIE: 2,
    FISH_PRAWN_CRAB: 3,
    TURBO_BIG_SMALL: 4,
    TURBO_ODD_EVEN: 6,
    DRAGON_TIGER: 7,
    KENO_PRO_MAX: 8,
    MINI_SE_DIE: 9,
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
    SPECIAL_SE_DIE: 24,
    SIC_BO: 25,
    VIP_FISH_PRAWN_CRAB: 26,
    VIP_BACCARAT: 27,
    VIP_SE_DIE_WAR: 28,
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
    BITCOIN_MASTER: 43,
    HILO: 45,
    NightClubGuide: 46,
    TREASURE_ISLAND: 47,
    UNBALANCEDBIGSMALL1: 50,
    BLOCKCHAIN_BACCARAT: 48,
    MEGA_KENO: 52,
    MEGA_KENO_2: 53,
    UNBALANCEDBIGSMALL2: 51,
    UNBALANCEDBIGSMALL3: 54,
    UNBALANCEDBIGSMALL4: 55,
    WAY_TO_GOAL: 49,
    MINI_SE_DIE_2: 56,
    MINI_SE_DIE_3: 57,
    MINI_SE_DIE_4: 58,
};

export const buildVersion = process.env.buildVersion;

export interface GameProps {
    id: string;
    title: string;
    type: string;
    publishedAt: string;
    stock: number;
    price: string;
    averageRating: number;
    ratings: number;
}

export const TagsName = {
    [ITags.RoundBased]: "Round-based",
    [ITags.Classic25PayLines]: "Classic - 25 paylines",
    [ITags.Cascading5x6]: "Cascading - 5x6",
    [ITags.TurnBased]: "Turn-based",
};

export const GameTypeName = {
    [GameType.AllGames]: "All Games",
    [GameType.DiceGame]: "Dice Game",
    [GameType.Roulette]: "Roulette",
    [GameType.CardGame]: "Card Game",
    [GameType.Slot]: "Slot",
    [GameType.Lottery]: "Lottery",
    [GameType.BitcoinMaster]: "Bitcoin Master",
};

export const GameCategoryName = {
    [GameCategory.AllGames]: "All Games",
    [GameCategory.Dices]: "Dices",
    [GameCategory.Casino]: "Casino",
    [GameCategory.Slots]: "Slots",
    [GameCategory.Others]: "Others",
};
