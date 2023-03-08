import { IGameConfigs } from "../../../type";
import { MinMaxBet } from "../constants";

const choicesMaxBet = {
    aaBet: 10000,
    anteBet: 100,
    callBet: 10000,
};

const odds = {
    AABet_flush: 21,
    AABet_fourKind: 41,
    AABet_fullHouse: 31,
    AABet_pairAces: 8,
    AABet_royalFlush: 101,
    AABet_straight: 8,
    AABet_straightFlush: 51,
    AABet_threeKind: 8,
    AABet_twoPairs: 8,
    AnteBet_flush: 3,
    AnteBet_fourKind: 11,
    AnteBet_fullHouse: 4,
    AnteBet_highCards: 2,
    AnteBet_onePair: 2,
    AnteBet_royalFlush: 101,
    AnteBet_straight: 2,
    AnteBet_straightFlush: 21,
    AnteBet_threeKind: 2,
    AnteBet_twoPairs: 2,
    CallBet_callBet: 2,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: MinMaxBet.maxBet,
    minBet: MinMaxBet.minBet,
    odds: odds,
};

export default GameConfigs;
