import { TGameConfigs } from "../../../type";

const choicesMaxBet = {
    anteBet: 500,
    callBet: 1000,
    riverBet: 500,
    turnBet: 500,
};

const odds = {
    AnteBet_flush: 10,
    AnteBet_fourKind: 15,
    AnteBet_fullHouse: 12,
    AnteBet_highCard: 2,
    AnteBet_onePair: 2,
    AnteBet_royalFlush: 100,
    AnteBet_straight: 7,
    AnteBet_straightFlush: 15,
    AnteBet_threeKind: 5,
    AnteBet_twoPairs: 2,
    call: 2,
    river: 2,
    turn: 2,
};

const GameConfigs: TGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
