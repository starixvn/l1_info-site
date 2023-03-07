import { IGameConfigs } from "../../../type";

const odds = {
    even: 1.96,
    odd: 1.96,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: {},
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
