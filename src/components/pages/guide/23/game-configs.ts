import { TGameConfigs } from "../../../type";

const odds = {
    blackjack: 2.5,
    regular: 2,
};

const GameConfigs: TGameConfigs = {
    maxBetPerChoices: {},
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
