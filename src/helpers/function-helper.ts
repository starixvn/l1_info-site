const getKeyByValue = (object: Record<string, string>, value: string) => {
    return Object.keys(object).find((key) => object[key] === value) ?? 0;
};

export { getKeyByValue };
