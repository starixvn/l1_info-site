import { EGameCategory, EGameType, TObjectKeyValue } from "./../../components/type";
import { ETags } from "../../components/type";

const locales = { en: "en", vi: "vi" };

export const languageMapper = { "en-US": "en", "vi-VN": "vi" };

export const LanguageLocaleMapper = {
    en: "en-US",
    vi: "vi-VN",
};

const Themes = {
    light: "light",
};

const GAMES = {
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
    BITCOIN_MASTER: 43,
    HILO: 45,
    NIGHCLUB_LADY: 46,
    TREASURE_ISLAND: 47,
    UNBALANCEDBIGSMALL1: 50,
    BLOCKCHAIN_BACCARAT: 48,
    MEGA_KENO: 52,
    MEGA_KENO_2: 53,
    WAY_TO_GOAL: 49,
    MINI_SE_DIE_2: 56,
    MINI_SE_DIE_3: 57,
    MINI_SE_DIE_4: 58,
    FRUIT_SLOT: 59,
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
    [EGameType.BitcoinMaster]: "bitcoinMaster",
};

const GameCategoryName: TObjectKeyValue = {
    [EGameCategory.AllGames]: "allGames",
    [EGameCategory.Dices]: "dices",
    [EGameCategory.Casino]: "casino",
    [EGameCategory.Slots]: "slots",
    [EGameCategory.Others]: "others",
};

const ROUTER_GAMES_NAME = {
    seDie: "seDie",
    seDieWar: "seDieWar",
    miniSeDie: "miniSeDie",
    sicBo: "sicBo",
    bigSmall: "bigSmall",
    turboOddEven: "turboOddEven",
    bigSmallCity: "bigSmallCity",
    wayToGoal: "wayToGoal",
    fourGuardians: "fourGuardians",
    theLegendOfHeroes: "theLegendOfHeroes",
    nightclubLady: "nightclubLady",
    treasureIsland: "treasureIsland",
    kenoProMax: "kenoProMax",
    megaKeno: "megaKeno",
    blockChainBaccarat: "blockChainBaccarat",
    baccarat: "baccarat",
    VIPFishPrawnCrab: "VIPFishPrawnCrab",
    fishPrawnCrab: "fishPrawnCrab",
    dragonTiger: "dragonTiger",
    roulette: "roulette",
    RNGLottery: "RNGLottery",
    blackjack: "blackjack",
    threeCards: "threeCards",
    bitcoinMaster: "bitcoinMaster",
    casinoHoldEm: "casinoHold'em",
    texasHoldEm: "texasHold'em",
    hiLo: "hiLo",
    fruitSlot: "fruitSlot",
};

const GAMES_CATEGORY = [
    { [GameCategoryName[EGameCategory.Casino]]: ROUTER_GAMES_NAME.blockChainBaccarat },
    { [GameCategoryName[EGameCategory.Dices]]: ROUTER_GAMES_NAME.bigSmall },
    { [GameCategoryName[EGameCategory.Casino]]: ROUTER_GAMES_NAME.baccarat },
    { [GameCategoryName[EGameCategory.Casino]]: ROUTER_GAMES_NAME.roulette },
    { [GameCategoryName[EGameCategory.Others]]: ROUTER_GAMES_NAME.RNGLottery },
    { [GameCategoryName[EGameCategory.Slots]]: ROUTER_GAMES_NAME.treasureIsland },
    { [GameCategoryName[EGameCategory.Dices]]: ROUTER_GAMES_NAME.seDie },
    { [GameCategoryName[EGameCategory.Dices]]: ROUTER_GAMES_NAME.seDieWar },
    { [GameCategoryName[EGameCategory.Dices]]: ROUTER_GAMES_NAME.miniSeDie },
    { [GameCategoryName[EGameCategory.Dices]]: ROUTER_GAMES_NAME.sicBo },
    { [GameCategoryName[EGameCategory.Dices]]: ROUTER_GAMES_NAME.turboOddEven },
    { [GameCategoryName[EGameCategory.Dices]]: ROUTER_GAMES_NAME.bigSmallCity },
    { [GameCategoryName[EGameCategory.Dices]]: ROUTER_GAMES_NAME.VIPFishPrawnCrab },
    { [GameCategoryName[EGameCategory.Dices]]: ROUTER_GAMES_NAME.fishPrawnCrab },
    { [GameCategoryName[EGameCategory.Casino]]: ROUTER_GAMES_NAME.dragonTiger },
    { [GameCategoryName[EGameCategory.Casino]]: ROUTER_GAMES_NAME.blackjack },
    { [GameCategoryName[EGameCategory.Casino]]: ROUTER_GAMES_NAME.threeCards },
    { [GameCategoryName[EGameCategory.Casino]]: ROUTER_GAMES_NAME.casinoHoldEm },
    { [GameCategoryName[EGameCategory.Casino]]: ROUTER_GAMES_NAME.texasHoldEm },
    { [GameCategoryName[EGameCategory.Casino]]: ROUTER_GAMES_NAME.hiLo },
    { [GameCategoryName[EGameCategory.Slots]]: ROUTER_GAMES_NAME.wayToGoal },
    { [GameCategoryName[EGameCategory.Slots]]: ROUTER_GAMES_NAME.fourGuardians },
    { [GameCategoryName[EGameCategory.Slots]]: ROUTER_GAMES_NAME.theLegendOfHeroes },
    { [GameCategoryName[EGameCategory.Slots]]: ROUTER_GAMES_NAME.nightclubLady },
    { [GameCategoryName[EGameCategory.Slots]]: ROUTER_GAMES_NAME.fruitSlot },
    { [GameCategoryName[EGameCategory.Others]]: ROUTER_GAMES_NAME.kenoProMax },
    { [GameCategoryName[EGameCategory.Others]]: ROUTER_GAMES_NAME.megaKeno },
    { [GameCategoryName[EGameCategory.Others]]: ROUTER_GAMES_NAME.bitcoinMaster },
];

const GAME_ID_MAPPING_ROUTER = {
    [GAMES.BLOCKCHAIN_BACCARAT]: ROUTER_GAMES_NAME.blockChainBaccarat,
    [GAMES.BIG_SMALL]: ROUTER_GAMES_NAME.bigSmall,
    [GAMES.BACCARAT]: ROUTER_GAMES_NAME.baccarat,
    [GAMES.ROULETTE]: ROUTER_GAMES_NAME.baccarat,
    [GAMES.LOTTERY]: ROUTER_GAMES_NAME.RNGLottery,
    [GAMES.TREASURE_ISLAND]: ROUTER_GAMES_NAME.treasureIsland,
    [GAMES.SE_DIE]: ROUTER_GAMES_NAME.seDie,
    [GAMES.SE_DIE_WAR]: ROUTER_GAMES_NAME.seDieWar,
    [GAMES.MINI_SE_DIE]: ROUTER_GAMES_NAME.miniSeDie,
    [GAMES.SIC_BO]: ROUTER_GAMES_NAME.sicBo,
    [GAMES.TURBO_ODD_EVEN]: ROUTER_GAMES_NAME.turboOddEven,
    [GAMES.UNBALANCEDBIGSMALL1]: ROUTER_GAMES_NAME.bigSmallCity,
    [GAMES.VIP_FISH_PRAWN_CRAB]: ROUTER_GAMES_NAME.VIPFishPrawnCrab,
    [GAMES.FISH_PRAWN_CRAB]: ROUTER_GAMES_NAME.fishPrawnCrab,
    [GAMES.DRAGON_TIGER]: ROUTER_GAMES_NAME.dragonTiger,
    [GAMES.BLACK_JACK]: ROUTER_GAMES_NAME.blackjack,
    [GAMES.THREE_CARDS]: ROUTER_GAMES_NAME.threeCards,
    [GAMES.CASINO_HOLDEM_POKER]: ROUTER_GAMES_NAME.casinoHoldEm,
    [GAMES.TEXAS_HOLDEM_POKER]: ROUTER_GAMES_NAME.texasHoldEm,
    [GAMES.HILO]: ROUTER_GAMES_NAME.hiLo,
    [GAMES.WAY_TO_GOAL]: ROUTER_GAMES_NAME.wayToGoal,
    [GAMES.FOUR_GUARDIANS]: ROUTER_GAMES_NAME.fourGuardians,
    [GAMES.HEROES_SLOT]: ROUTER_GAMES_NAME.theLegendOfHeroes,
    [GAMES.NIGHCLUB_LADY]: ROUTER_GAMES_NAME.nightclubLady,
    [GAMES.FRUIT_SLOT]: ROUTER_GAMES_NAME.fruitSlot,
    [GAMES.KENO_PRO_MAX]: ROUTER_GAMES_NAME.kenoProMax,
    [GAMES.MEGA_KENO]: ROUTER_GAMES_NAME.megaKeno,
    [GAMES.BITCOIN_MASTER]: ROUTER_GAMES_NAME.bitcoinMaster,
};

export { locales, Themes, GAMES, buildVersion, TagsName, GameTypeName, GameCategoryName, GAME_ID_MAPPING_ROUTER, GAMES_CATEGORY };
