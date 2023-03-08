import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const choicesMaxBet = {
    crab: 2000,
    fish: 2000,
    gourd: 2000,
    prawn: 2000,
    rooster: 2000,
    stag: 2000,
};

const odds = {
    single: 2,
    double: 3.5,
    triple: 6,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
