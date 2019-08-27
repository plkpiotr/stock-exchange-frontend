import { QUOTES } from 'components/pages/Indicators';
import { countSum } from 'utils/calculation';

const PREVIOUS = 1;
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

  const positiveFlows = new Array(DAYS + QUOTES - PREVIOUS);
  const negativeFlows = new Array(DAYS + QUOTES - PREVIOUS);

  for (let i = PREVIOUS; i < (DAYS + QUOTES); i += 1) {
    if (typicalPrices[i - PREVIOUS] - typicalPrices[i] < 0) {
      positiveFlows[i - PREVIOUS] = moneyFlows[i];
      negativeFlows[i - PREVIOUS] = 0;
    } else {
      positiveFlows[i - PREVIOUS] = 0;
      negativeFlows[i - PREVIOUS] = moneyFlows[i];
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
