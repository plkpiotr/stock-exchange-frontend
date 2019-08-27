import { QUOTES } from 'components/pages/Indicators';
import { countSum } from 'utils/calculation';

const DAYS = 14;

export const countMoneyFlowIndexes = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .reverse()
    .slice(-(DAYS + QUOTES));
  const lowPrices = quotes.map(column => column[3])
    .reverse()
    .slice(-(DAYS + QUOTES));
  const closePrices = quotes.map(column => column[4])
    .reverse()
    .slice(-(DAYS + QUOTES));
  const volumes = quotes.map(column => column[6])
    .reverse()
    .slice(-(DAYS + QUOTES));

  const typicalPrices = new Array(DAYS + QUOTES);
  const moneyFlows = new Array(DAYS + QUOTES);

  for (let i = 0; i < (DAYS + QUOTES); i += 1) {
    typicalPrices[i] = (highPrices[i] + lowPrices[i] + closePrices[i]) / 3;
    moneyFlows[i] = typicalPrices[i] * volumes[i];
  }

  const positiveFlows = [];
  const negativeFlows = [];

  for (let i = 1; i < (DAYS + QUOTES); i += 1) {
    if (typicalPrices[i] > typicalPrices[i - 1]) {
      positiveFlows.push(moneyFlows[i]);
      negativeFlows.push(0);
    } else {
      negativeFlows.push(moneyFlows[i]);
      positiveFlows.push(0);
    }
  }

  const indexes = new Array(QUOTES);

  for (let i = DAYS; i < (DAYS + QUOTES); i += 1) {
    const sumOfPositiveFlows = countSum(positiveFlows.slice(i - DAYS, i));
    const sumOfNegativeFlows = countSum(negativeFlows.slice(i - DAYS, i));
    indexes[i - DAYS] = 100 * sumOfPositiveFlows / (sumOfPositiveFlows + sumOfNegativeFlows);
    indexes[i - DAYS] = indexes[i - DAYS].toFixed(2);
  }

  return indexes;
};

export default countMoneyFlowIndexes;
