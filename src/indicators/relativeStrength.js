import { QUOTES } from 'components/pages/Indicators';
import { countAverage } from 'utils/calculation';

const PREVIOUS = 1;
const DAYS = 14;

export const countRelativeStrengthIndexes = (quotes) => {
  const closePrices = quotes.map(column => column[4])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();

  const gains = new Array(DAYS - 1 + QUOTES - PREVIOUS);
  const losses = new Array(DAYS - 1 + QUOTES - PREVIOUS);

  for (let i = PREVIOUS; i < (DAYS - 1 + QUOTES); i += 1) {
    if (closePrices[i] - closePrices[i - PREVIOUS] > 0) {
      gains[i - PREVIOUS] = closePrices[i] - closePrices[i - PREVIOUS];
      losses[i - PREVIOUS] = 0;
    } else {
      gains[i - PREVIOUS] = 0;
      losses[i - PREVIOUS] = closePrices[i - PREVIOUS] - closePrices[i];
    }
  }

  const indexes = new Array(DAYS - 1 + QUOTES);

  for (let i = DAYS - 1; i < (DAYS - 1 + QUOTES); i += 1) {
    const averageGain = countAverage(gains.slice(i - DAYS + 1, i + 1));
    const averageLoss = countAverage(losses.slice(i - DAYS + 1, i + 1));
    indexes[i - DAYS + 1] = 100 - 100 / (1 + (averageGain / averageLoss));
    indexes[i - DAYS + 1] = indexes[i - DAYS + 1].toFixed(2);
  }

  return indexes;
};

export default countRelativeStrengthIndexes;
