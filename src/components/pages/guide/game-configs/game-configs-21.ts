import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const choicesMaxBet = {
    straightUp: 50,
    split: 100,
    street: 150,
    triangle: 150,
    corner: 250,
    fourNumbers: 250,
    line: 400,
    column: 1000,
    dozen: 1000,
    redBlack: 2000,
    oddEven: 2000,
    bigSmall: 2000,
};

const odds = {
    straightUp: 36,
    split: 18,
    street: 12,
    triangle: 12,
    corner: 9,
    fourNumbers: 9,
    line: 6,
    column: 3,
    dozen: 3,
    redBlack: 2,
    oddEven: 2,
    bigSmall: 2,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
