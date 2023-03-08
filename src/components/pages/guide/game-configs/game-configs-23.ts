import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const odds = {
    blackjack: 2.5,
    regular: 2,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: {},
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
