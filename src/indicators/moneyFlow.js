import { QUOTES } from 'components/pages/Indicators';
import { countSum } from 'utils/calculation';

const PREVIOUS = 1;
const DAYS = 14;

export const countMoneyFlowIndexes = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();
  const lowPrices = quotes.map(column => column[3])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();
  const closePrices = quotes.map(column => column[4])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();
  const volumes = quotes.map(column => column[6])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();

  const typicalPrices = new Array(DAYS + QUOTES);
  const moneyFlows = new Array(DAYS + QUOTES);

  for (let i = 0; i < (DAYS - 1 + QUOTES); i += 1) {
    typicalPrices[i] = (highPrices[i] + lowPrices[i] + closePrices[i]) / 3;
    moneyFlows[i] = typicalPrices[i] * volumes[i];
  }

  const positiveFlows = new Array(DAYS - 1 + QUOTES - PREVIOUS);
  const negativeFlows = new Array(DAYS - 1 + QUOTES - PREVIOUS);

  for (let i = PREVIOUS; i < (DAYS - 1 + QUOTES); i += 1) {
    if (typicalPrices[i - PREVIOUS] - typicalPrices[i] < 0) {
      positiveFlows[i - PREVIOUS] = moneyFlows[i];
      negativeFlows[i - PREVIOUS] = 0;
    } else {
      positiveFlows[i - PREVIOUS] = 0;
      negativeFlows[i - PREVIOUS] = moneyFlows[i];
    }
  }

  const indexes = new Array(QUOTES);

  for (let i = DAYS - 1; i < (DAYS - 1 + QUOTES); i += 1) {
    const sumOfPositiveFlows = countSum(positiveFlows.slice(i - DAYS + 1, i + 1));
    const sumOfNegativeFlows = countSum(negativeFlows.slice(i - DAYS + 1, i + 1));
    indexes[i - DAYS + 1] = 100 * sumOfPositiveFlows / (sumOfPositiveFlows + sumOfNegativeFlows);
    indexes[i - DAYS + 1] = indexes[i - DAYS + 1].toFixed(2);
  }

  return indexes;
};

export default countMoneyFlowIndexes;
