import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const odds = {
    big: 1.96,
    small: 1.96,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: {},
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
