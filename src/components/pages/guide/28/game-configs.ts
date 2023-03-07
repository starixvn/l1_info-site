import { TGameConfigs } from "../../../type";

const choicesMaxBet = {
    player: 2000,
    banker: 2000,
    tie: 2000,
    even: 2000,
    odd: 2000,
    playerEven: 2000,
    playerOdd: 2000,
    playerRed3: 2000,
    playerWhite3: 2000,
    playerRed4: 500,
    playerWhite4: 500,
    bankerEven: 2000,
    bankerOdd: 2000,
    bankerRed3: 2000,
    bankerWhite3: 2000,
    bankerRed4: 500,
    bankerWhite4: 500,
};

const odds = {
    player: 2.6,
    banker: 2.6,
    tie: 3.5,
    even: 1.96,
    odd: 1.96,
    playerEven: 1.96,
    playerOdd: 1.96,
    playerRed3: 3.75,
    playerWhite3: 3.75,
    playerRed4: 14.4,
    playerWhite4: 14.4,
    bankerEven: 1.96,
    bankerOdd: 1.96,
    bankerRed3: 3.75,
    bankerWhite3: 3.75,
    bankerRed4: 14.4,
    bankerWhite4: 14.4,
};

const GameConfigs: TGameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
