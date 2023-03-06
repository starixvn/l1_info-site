export type Props = {
    queryGame: number;
};

export type TObjectKeyValue = {
    [key: string]: string;
};

export enum GameCategory {
    AllGames = 0,
    Dices,
    Casino,
    Slots,
    Others,
}

export enum GameType {
    AllGames,
    DiceGame,
    CardGame,
    Roulette,
    Slot,
    Lottery,
    BitcoinMaster,
}

export enum ITags {
    RoundBased,
    Classic25PayLines,
    Cascading5x6,
    TurnBased,
}

export enum IVolatility {
    Medium,
    MediumHigh,
}

export interface IStaticProps<IParams> {
    params: IParams;
    locales: string[];
    locale: string;
    defaultLocale: string;
}

export interface TGameConfigs {
    minBet: number;
    maxBet: number;
    odds: Record<string, number> | any;
    maxBetPerChoices: Record<string, number>;
    betLevels?: number[];
    betMultiplier?: number;
    coinValues?: number[];
    maxWinPerRound?: number;
    coin?: number;
    level?: number;
    jackpot?: { winningRatio: number };
    stakeLevels?: number[];
}

export type TUserStakeLevel = {
    minBet: number;
    maxBet: number;
};

export interface TConfigs {
    userStakeLevel: TUserStakeLevel;
    gameConfigs: TGameConfigs;
}
