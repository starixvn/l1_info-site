import { IGameConfigs } from "../../../type";

const odds = {
    bar: 100,
    bar25: 25,
    bar50: 50,
    bell: 20,
    bell3: 3,
    big: 1.96,
    cherry: 5,
    cherry3: 3,
    lemon: 15,
    lemon3: 3,
    orange: 10,
    orange3: 3,
    small: 1.96,
    star: 30,
    star3: 3,
    tripleSeven: 40,
    tripleSeven3: 3,
    watermelon: 20,
    watermelon3: 3,
};

const GameConfigs: IGameConfigs = {
    maxBetPerChoices: {},
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
