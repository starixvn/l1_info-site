import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const choicesMaxBet = {
    player: 5000,
    banker: 5000,
    big: 5000,
    small: 5000,
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
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
