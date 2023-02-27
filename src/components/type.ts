export type Props = {
    queryGame: number;
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
