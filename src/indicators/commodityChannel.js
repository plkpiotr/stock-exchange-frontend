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
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();
  const lowPrices = quotes.map(column => column[3])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();
  const closePrices = quotes.map(column => column[4])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();

  const typicalPrices = new Array(DAYS - 1 + QUOTES);
  const averages = new Array(QUOTES);
  const indexes = new Array(QUOTES);

  for (let i = 0; i < (DAYS - 1 + QUOTES); i += 1) {
    typicalPrices[i] = (highPrices[i] + lowPrices[i] + closePrices[i]) / 3;
  }

  for (let i = DAYS - 1; i < (DAYS - 1 + QUOTES); i += 1) {
    averages[i - DAYS + 1] = countAverages(highPrices, lowPrices, closePrices, i + 1);
    indexes[i - DAYS + 1] = (typicalPrices[i] - averages[i - DAYS + 1]) / (0.015);
    indexes[i - DAYS + 1] /= countMedianDeviation(typicalPrices.slice(i - DAYS + 1, i + 1), averages[i - DAYS + 1]);
    indexes[i - DAYS + 1] = indexes[i - DAYS + 1].toFixed(2);
  }

  return indexes;
};

export default countCommodityChannelIndexes;
