import { TGameConfigs } from "../../../type";

const choicesMaxBet = {
    dragon: 2000,
    tiger: 2000,
    tie: 500,
};

const odds = {
    dragon: 2,
    tiger: 2,
    tie: 11,
};

const GameConfigs: TGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
