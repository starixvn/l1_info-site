import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const odds = {
    even: 1.96,
    odd: 1.96,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: {},
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
