import { IGameConfigs } from "../../../type";

const choicesMaxBet = {
    player: 2000,
    banker: 2000,
    big: 2000,
    small: 2000,
    tie: 500,
    playerPair: 500,
    bankerPair: 500,
};

const odds = {
    player: 2,
    banker: 1.95,
    big: 1.54,
    small: 2.5,
    tie: 9,
    playerPair: 12,
    bankerPair: 12,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
