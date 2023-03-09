const numberWithCommas = (number: number, toFixed = 2) => {
    return number.toLocaleString("en-US", { maximumFractionDigits: toFixed });
};

const formatOdds = (value: number | undefined, fractionFormat = false) => {
    return fractionFormat && value ? `${numberWithCommas(value - 1)}:1` : `1:${value}`;
};

export { numberWithCommas, formatOdds };
