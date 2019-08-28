import { QUOTES } from 'components/pages/Indicators';
import { findMaxValue, findMinValue } from 'utils/calculation';

const DAYS = 10;

export const countWilliamsPercentRanges = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();
  const lowPrices = quotes.map(column => column[3])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();
  const closePrices = quotes.map(column => column[4])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();

  const ranges = new Array(DAYS - 1 + QUOTES);

  for (let i = DAYS - 1; i < (DAYS - 1 + QUOTES); i += 1) {
    const currentHighestPrice = findMaxValue(highPrices.slice(i - DAYS + 1, i + 1));
    ranges[i - DAYS + 1] = 100 * (closePrices[i] - currentHighestPrice);
    const currentLowestPrice = findMinValue(lowPrices.slice(i - DAYS + 1, i + 1));
    ranges[i - DAYS + 1] /= currentHighestPrice - currentLowestPrice;
    ranges[i - DAYS + 1] = ranges[i - DAYS + 1].toFixed(2);
  }

  return ranges;
};

export default countWilliamsPercentRanges;
