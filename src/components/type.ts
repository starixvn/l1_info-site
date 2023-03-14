export type TObjectKeyValue = {
    [key: string]: string;
};

export enum ECategoryOther {
    contactUS = -1,
}

export enum EGameCategory {
    AllGames = 0,
    Dices,
    Casino,
    Slots,
    Others,
}

export enum EGameType {
    AllGames,
    DiceGame,
    CardGame,
    Roulette,
    Slot,
    Lottery,
    Others,
}

export enum ETags {
    RoundBased,
    Classic25PayLines,
    Cascading5x6,
    TurnBased,
}

export enum EVolatility {
    null,
    Medium,
    MediumHigh,
}

export interface IStaticProps<IParams> {
    params: IParams;
    locales: string[];
    locale: string;
    defaultLocale: string;
}

export interface IGameConfigs {
    minBet?: number;
    maxBet?: number;
    odds: Record<string, number> | any;
    maxBetPerChoices?: Record<string, number>;
    betLevels?: number[];
    betMultiplier?: number;
    coinValues?: number[];
    maxWinPerRound?: number;
    jackpot?: { winningRatio: number };
    stakeLevels?: number[];
    baseStakeLevels?: number[];
}

export type TUserStakeLevel = {
    minBet: number;
    maxBet: number;
};

export type TMinMaxBet = TUserStakeLevel;
