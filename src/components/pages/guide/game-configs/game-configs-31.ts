import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const choicesMaxBet = {
    ["4Sets"]: 200,
    special: 100,
    head: 500,
    tail: 500,
    ["27Sets"]: 2000,
    others: 2000,
    parlay2: 200,
    parlay3: 100,
    parlay4: 100,
};
const odds = {
    ["4Sets"]: 24,
    special: 90,
    head: 9,
    tail: 9,
    ["27Sets"]: 3.6,
    others: 1.96,
    parlay2: 13,
    parlay3: 50,
    parlay4: 120,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
