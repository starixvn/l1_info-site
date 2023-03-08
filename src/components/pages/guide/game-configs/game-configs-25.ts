import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const choicesMaxBet = {
    specific1: 2000,
    specific2: 2000,
    specific3: 2000,
    specific4: 2000,
    specific5: 2000,
    specific6: 2000,
    big: 2000,
    small: 2000,
    anyTriple: 200,
    total4: 200,
    total5: 200,
    total6: 200,
    total7: 200,
    total8: 1000,
    total9: 1000,
    total10: 1000,
    total11: 1000,
    total12: 1000,
    total13: 1000,
    total14: 200,
    total15: 200,
    total16: 200,
    total17: 200,
};
const odds = {
    single: 2,
    double: 3.5,
    triple: 6,
    big: 2,
    small: 2,
    anyTriple: 33,
    total4: 61,
    total5: 31,
    total6: 18,
    total7: 13,
    total8: 9,
    total9: 7,
    total10: 7,
    total11: 7,
    total12: 7,
    total13: 9,
    total14: 13,
    total15: 18,
    total16: 31,
    total17: 61,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
