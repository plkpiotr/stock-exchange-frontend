import { QUOTES } from 'components/pages/Indicators';
import { findMaxValue, findMinValue } from 'utils/calculation';

const DAYS = 10;

export const countWilliamsPercentRanges = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .reverse()
    .slice(-(DAYS + QUOTES));
  const lowPrices = quotes.map(column => column[3])
    .reverse()
    .slice(-(DAYS + QUOTES));
  const closePrices = quotes.map(column => column[4])
    .reverse()
    .slice(-(DAYS + QUOTES));

  const ranges = new Array(DAYS + QUOTES);

  for (let i = DAYS; i < (DAYS + QUOTES); i += 1) {
    const currentHighestPrice = findMaxValue(highPrices.slice(i - DAYS + 1, i + 1));
    ranges[i - DAYS] = 100 * (closePrices[i] - currentHighestPrice);
    const currentLowestPrice = findMinValue(lowPrices.slice(i - DAYS + 1, i + 1));
    ranges[i - DAYS] /= currentHighestPrice - currentLowestPrice;
    ranges[i - DAYS] = ranges[i - DAYS].toFixed(2);
  }

  return ranges;
};

export default countWilliamsPercentRanges;
