const stylizeNumber = (result, unit) => {
  if (result > 0) {
    return '+'.concat(result.toFixed(2), ' ', unit);
  }
  return ''.concat(result.toFixed(2), ' ', unit);
};

export default stylizeNumber;
