import { QUOTES } from 'components/pages/Indicators';
import { countSum } from 'utils/calculation';

const PREVIOUS = 1;
const SHORT_PERIOD = 7;
const MEDIUM_PERIOD = 14;
const LONG_PERIOD = 28;

const countAverages = (buyingPressures, trueRanges, period, iteration) => {
  let average = countSum(buyingPressures.slice(iteration - period, iteration));
  average /= countSum(trueRanges.slice(iteration - period, iteration));

  return average;
};

export const countUltimateOscillators = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .slice(0, LONG_PERIOD - 1 + QUOTES)
    .reverse();
  const lowPrices = quotes.map(column => column[3])
    .slice(0, LONG_PERIOD - 1 + QUOTES)
    .reverse();
  const closePrices = quotes.map(column => column[4])
    .slice(0, LONG_PERIOD - 1 + QUOTES)
    .reverse();

  const pressures = new Array(LONG_PERIOD - 1 + QUOTES - PREVIOUS);
  const ranges = new Array(LONG_PERIOD - 1 + QUOTES - PREVIOUS);

  for (let i = PREVIOUS; i < (LONG_PERIOD - 1 + QUOTES); i += 1) {
    pressures[i - PREVIOUS] = closePrices[i];
    pressures[i - PREVIOUS] -= Math.min(lowPrices[i], closePrices[i - PREVIOUS]);
    ranges[i] = Math.max(highPrices[i], closePrices[i - PREVIOUS]);
    ranges[i] -= Math.min(lowPrices[i], closePrices[i - PREVIOUS]);
  }

  const shortAverages = new Array(QUOTES);
  const mediumAverages = new Array(QUOTES);
  const longAverages = new Array(QUOTES);
  const oscillators = new Array(QUOTES);

  for (let i = LONG_PERIOD - 1; i < (LONG_PERIOD - 1 + QUOTES); i += 1) {
    shortAverages[i - LONG_PERIOD + 1] = countAverages(pressures, ranges, SHORT_PERIOD, i + 1);
    mediumAverages[i - LONG_PERIOD + 1] = countAverages(pressures, ranges, MEDIUM_PERIOD, i + 1);
    longAverages[i - LONG_PERIOD + 1] = countAverages(pressures, ranges, LONG_PERIOD, i + 1);
    oscillators[i - LONG_PERIOD + 1] = 4 * shortAverages[i - LONG_PERIOD + 1];
    oscillators[i - LONG_PERIOD + 1] += 2 * mediumAverages[i - LONG_PERIOD + 1];
    oscillators[i - LONG_PERIOD + 1] += longAverages[i - LONG_PERIOD + 1];
    oscillators[i - LONG_PERIOD + 1] *= 100 / 7;
    oscillators[i - LONG_PERIOD + 1] = oscillators[i - LONG_PERIOD + 1].toFixed(2);
  }

  return oscillators;
};

export default countUltimateOscillators;
