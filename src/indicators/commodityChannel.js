import { QUOTES } from 'components/pages/Indicators';
import { countAverage, countMedianDeviation } from 'utils/calculation';

const DAYS = 20;

const countAverages = (highPrices, lowPrices, closePrices, iteration) => {
  const highPricesAverage = countAverage(highPrices.slice(iteration - DAYS, iteration));
  const lowPricesAverage = countAverage(lowPrices.slice(iteration - DAYS, iteration));
  const closePricesAverage = countAverage(closePrices.slice(iteration - DAYS, iteration));

  return (highPricesAverage + lowPricesAverage + closePricesAverage) / 3;
};

export const countCommodityChannelIndexes = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .reverse()
    .slice(-(DAYS + QUOTES));
  const lowPrices = quotes.map(column => column[3])
    .reverse()
    .slice(-(DAYS + QUOTES));
  const closePrices = quotes.map(column => column[4])
    .reverse()
    .slice(-(DAYS + QUOTES));

  const typicalPrices = new Array(DAYS + QUOTES);
  const averages = new Array(QUOTES);
  const indexes = new Array(QUOTES);

  for (let i = 0; i < (DAYS + QUOTES); i += 1) {
    typicalPrices[i] = (highPrices[i] + lowPrices[i] + closePrices[i]) / 3;
  }

  for (let i = DAYS; i < (DAYS + QUOTES); i += 1) {
    averages[i - DAYS] = countAverages(highPrices, lowPrices, closePrices, i);
    indexes[i - DAYS] = (typicalPrices[i] - averages[i - DAYS]) / (0.015);
    indexes[i - DAYS] /= countMedianDeviation(typicalPrices.slice(i - DAYS, i), averages[i - DAYS]);
    indexes[i - DAYS] = indexes[i - DAYS].toFixed(2);
  }

  return indexes;
};

export default countCommodityChannelIndexes;
