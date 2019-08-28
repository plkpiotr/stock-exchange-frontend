export const countSum = array => array.reduce((a, b) => a + b, 0);

export const countAverage = array => array.reduce((a, b) => a + b, 0) / array.length;

export const countMedianDeviation = (set, average) => {
  let sum = 0;
  for (let i = 0; i < set.length; i += 1) {
    sum += Math.abs(set[i] - average);
  }
  sum /= 20;
  return sum;
};

export const findMaxValue = array => Math.max(...array);

export const findMinValue = array => Math.min(...array);
