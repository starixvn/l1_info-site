import { IGameConfigs } from "../../../type";

const choicesMaxBet = {
    down: 2000,
    even: 2000,
    odd: 2000,
    up: 2000,
};

const odds = {
    down: 1.96,
    even: 1.96,
    odd: 1.96,
    up: 1.96,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
