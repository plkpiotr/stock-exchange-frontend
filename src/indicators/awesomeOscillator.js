const countAverage = array => array.reduce((a, b) => a + b, 0) / array.length;

function countFirstAverage(highPrices, lowPrices, i, period) {
  const longPeriodHighPricesAverage = countAverage(highPrices.slice(i - period, i));
  const longPeriodLowPricesAverage = countAverage(lowPrices.slice(i - period, i));

  return (longPeriodHighPricesAverage + longPeriodLowPricesAverage) / 2;
}

export const countAwesomeOscillator = (quotes) => {
  const highPrices = quotes.map(e => e[2]).reverse().slice(-64);
  const lowPrices = quotes.map(e => e[3]).reverse().slice(-64);

  const awesomeOscillators = new Array(30);
  const longPeriodPricesAverage = new Array(30);
  const shortPeriodPricesAverage = new Array(30);

  for (let i = 34; i < 64; i++) {
    longPeriodPricesAverage[i - 34] = countFirstAverage(highPrices, lowPrices, i, 34);
    shortPeriodPricesAverage[i - 34] = countFirstAverage(highPrices, lowPrices, i, 5);
    awesomeOscillators[i - 34] = shortPeriodPricesAverage[i - 34] - longPeriodPricesAverage[i - 34];
    awesomeOscillators[i - 34] = awesomeOscillators[i - 34].toFixed(2);
  }

  console.log(lowPrices.length);
  console.log(awesomeOscillators.length);
  for (let i = 0; i < 30; i++) {
    console.log(awesomeOscillators[i]);
  }

  return awesomeOscillators;
};

export default countAwesomeOscillator;
