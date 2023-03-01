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

export interface IStaticProps<IParams> {
    params: IParams;
    locales: string[];
    locale: string;
    defaultLocale: string;
}
