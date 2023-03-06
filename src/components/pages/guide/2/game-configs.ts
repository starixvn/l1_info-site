const choicesMaxBet = {
    even: 2000,
    odd: 2000,
    red2: 2000,
    red4: 500,
    white4: 500,
    red3: 2000,
    white3: 2000,
};

const odds = {
    even: 1.96,
    odd: 1.96,
    red2: 2.4,
    red4: 14.4,
    white4: 14.4,
    white3: 3.75,
    red3: 3.75,
};

const GameConfigs = {
    maxBetPerChoices: choicesMaxBet,
    maxBet: 2000,
    minBet: 1,
    odds: odds,
};

export default GameConfigs;
