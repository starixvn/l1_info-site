import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const choicesMaxBet = {
    stag: 5000,
    gourd: 5000,
    rooster: 5000,
    fish: 5000,
    crab: 5000,
    prawn: 5000,
    anyTriple: 500,
    mountain: 5000,
    ocean: 5000,
};

const odds = {
    single: 2,
    double: 3.5,
    triple: 6,
    anyTriple: 33,
    mountain: 1.96,
    ocean: 1.96,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 5000,
    minBet: 10,
    odds: odds,
};

export default GameConfigs;
