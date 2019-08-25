const SHORT_PERIOD = 5;
const LONG_PERIOD = 34;
const NUMBER_OF_DAYS = 30;

const countAverage = array => array.reduce((a, b) => a + b, 0) / array.length;

const countAverages = (highPrices, lowPrices, period, iteration) => {
  const highPricesAverage = countAverage(highPrices.slice(iteration - period, iteration));
  const lowPricesAverage = countAverage(lowPrices.slice(iteration - period, iteration));
  return (highPricesAverage + lowPricesAverage) / 2;
};

export const countAwesomeOscillators = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .reverse()
    .slice(-(LONG_PERIOD + NUMBER_OF_DAYS));
  const lowPrices = quotes.map(column => column[3])
    .reverse()
    .slice(-(LONG_PERIOD + NUMBER_OF_DAYS));

  const longPeriodAverage = new Array(NUMBER_OF_DAYS);
  const shortPeriodAverage = new Array(NUMBER_OF_DAYS);
  const awesomeOscillators = new Array(NUMBER_OF_DAYS);

  for (let i = LONG_PERIOD; i < (LONG_PERIOD + NUMBER_OF_DAYS); i += 1) {
    longPeriodAverage[i - LONG_PERIOD] = countAverages(highPrices, lowPrices, LONG_PERIOD, i);
    shortPeriodAverage[i - LONG_PERIOD] = countAverages(highPrices, lowPrices, SHORT_PERIOD, i);
    awesomeOscillators[i - LONG_PERIOD] = shortPeriodAverage[i - LONG_PERIOD] - longPeriodAverage[i - LONG_PERIOD];
    awesomeOscillators[i - LONG_PERIOD] = awesomeOscillators[i - LONG_PERIOD].toFixed(2);
  }

  return awesomeOscillators;
};

export default countAwesomeOscillators;
