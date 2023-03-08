import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const choicesMaxBet = {
    red: 2000,
    black: 2000,
    diamonds: 2000,
    hearts: 2000,
    spades: 2000,
    clubs: 2000,
};
const odds = {
    red: 1.96,
    black: 1.96,
    diamonds: 1.68,
    hearts: 1.68,
    spades: 1.68,
    clubs: 1.68,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
