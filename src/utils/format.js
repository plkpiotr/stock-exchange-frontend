export const stylizeNumber = (result, unit) => {
  if (result > 0) {
    return '+'.concat(result.toFixed(2), ' ', unit);
  }
  return ''.concat(result.toFixed(2), ' ', unit);
};

export const shortenLine = (str, max) => (str.length > max ? str.substring(0, max).concat('…') : str);
