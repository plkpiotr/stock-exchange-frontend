import { QUOTES } from 'components/pages/Indicators';
import { countAverage } from 'utils/calculation';

const PREVIOUS = 1;
const DAYS = 14;

export const countRelativeStrengthIndexes = (quotes) => {
  const closePrices = quotes.map(column => column[4])
    .reverse()
    .slice(-(DAYS + QUOTES));

  const gains = new Array(DAYS + QUOTES - PREVIOUS);
  const losses = new Array(DAYS + QUOTES - PREVIOUS);

  for (let i = PREVIOUS; i < (DAYS + QUOTES); i += 1) {
    if (closePrices[i] - closePrices[i - PREVIOUS] > 0) {
      gains[i - PREVIOUS] = closePrices[i] - closePrices[i - PREVIOUS];
      losses[i - PREVIOUS] = 0;
    } else {
      gains[i - PREVIOUS] = 0;
      losses[i - PREVIOUS] = closePrices[i - PREVIOUS] - closePrices[i];
    }
  }

  const indexes = new Array(DAYS + QUOTES);

  for (let i = DAYS; i < (DAYS + QUOTES); i += 1) {
    const averageGain = countAverage(gains.slice(i - DAYS, i));
    const averageLoss = countAverage(losses.slice(i - DAYS, i));
    indexes[i - DAYS] = 100 - 100 / (1 + (averageGain / averageLoss));
    indexes[i - DAYS] = indexes[i - DAYS].toFixed(2);
  }

  return indexes;
};

export default countRelativeStrengthIndexes;
