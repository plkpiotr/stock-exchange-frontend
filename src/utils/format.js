export const shortenLine = (str, max) => {
  if (str.length > max) {
    return str.substring(0, max).concat('…');
  }
  return str;
};

export const stylizeNumber = (result, unit) => {
  if (result > 0) {
    return '+'.concat(result.toFixed(2), ' ', unit);
  }
  return ''.concat(result.toFixed(2), ' ', unit);
};
