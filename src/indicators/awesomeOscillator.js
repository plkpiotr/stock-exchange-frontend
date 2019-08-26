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
    .reverse()
    .slice(-(LONG_PERIOD + QUOTES));
  const lowPrices = quotes.map(column => column[3])
    .reverse()
    .slice(-(LONG_PERIOD + QUOTES));

  const longAverages = new Array(QUOTES);
  const shortAverages = new Array(QUOTES);
  const oscillators = new Array(QUOTES);

  for (let i = LONG_PERIOD; i < (LONG_PERIOD + QUOTES); i += 1) {
    longAverages[i - LONG_PERIOD] = countAverages(highPrices, lowPrices, LONG_PERIOD, i);
    shortAverages[i - LONG_PERIOD] = countAverages(highPrices, lowPrices, SHORT_PERIOD, i);
    oscillators[i - LONG_PERIOD] = shortAverages[i - LONG_PERIOD] - longAverages[i - LONG_PERIOD];
    oscillators[i - LONG_PERIOD] = oscillators[i - LONG_PERIOD].toFixed(2);
  }

  return oscillators;
};

export default countAwesomeOscillators;
