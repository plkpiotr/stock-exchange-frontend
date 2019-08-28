import { QUOTES } from 'components/pages/Indicators';
import { countAverage } from 'utils/calculation';

const SHORT_PERIOD = 5;
const LONG_PERIOD = 34;

const countAverages = (highPrices, lowPrices, period, iteration) => {
  const highPricesAverage = countAverage(highPrices.slice(iteration - period, iteration));
  const lowPricesAverage = countAverage(lowPrices.slice(iteration - period, iteration));

  return (highPricesAverage + lowPricesAverage) / 2;
};

export const countAwesomeOscillators = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .slice(0, LONG_PERIOD - 1 + QUOTES)
    .reverse();
  const lowPrices = quotes.map(column => column[3])
    .slice(0, LONG_PERIOD - 1 + QUOTES)
    .reverse();

  const longAverages = new Array(QUOTES);
  const shortAverages = new Array(QUOTES);
  const oscillators = new Array(QUOTES);

  for (let i = LONG_PERIOD - 1; i < (LONG_PERIOD - 1 + QUOTES); i += 1) {
    longAverages[i - LONG_PERIOD + 1] = countAverages(highPrices, lowPrices, LONG_PERIOD, i + 1);
    shortAverages[i - LONG_PERIOD + 1] = countAverages(highPrices, lowPrices, SHORT_PERIOD, i + 1);
    oscillators[i - LONG_PERIOD + 1] = shortAverages[i - LONG_PERIOD + 1] - longAverages[i - LONG_PERIOD + 1];
    oscillators[i - LONG_PERIOD + 1] = oscillators[i - LONG_PERIOD + 1].toFixed(2);
  }

  return oscillators;
};

export default countAwesomeOscillators;
