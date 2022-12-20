const numberWithCommas = (number: number, toFixed = 2) => {
    return number.toLocaleString("en-US", { maximumFractionDigits: toFixed });
};

const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formatOdds = (value: number | undefined, fractionFormat: boolean | undefined) => {
    return fractionFormat && value ? `${numberWithCommas(value - 1)}:1` : `1:${value}`;
};

export { numberWithCommas, randomInteger, formatOdds };
