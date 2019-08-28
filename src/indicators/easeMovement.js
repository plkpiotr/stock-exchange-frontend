import { QUOTES } from 'components/pages/Indicators';
import { countAverage, findMaxValue } from 'utils/calculation';

const PREVIOUS = 1;
const DAYS = 14;

export const countEaseOfMovementIndicators = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .slice(0, DAYS + QUOTES)
    .reverse();
  const lowPrices = quotes.map(column => column[3])
    .slice(0, DAYS + QUOTES)
    .reverse();
  const volumes = quotes.map(column => column[6])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();

  const distanceRatios = new Array(DAYS - 1 + QUOTES - PREVIOUS);
  const boxRatios = new Array(DAYS - 1 + QUOTES - PREVIOUS);
  const oneDayIndicators = new Array(DAYS - 1 + QUOTES - PREVIOUS);

  for (let i = PREVIOUS; i < (DAYS - 1 + QUOTES); i += 1) {
    distanceRatios[i - PREVIOUS] = (highPrices[i] + lowPrices[i]) / 2;
    distanceRatios[i - PREVIOUS] -= (highPrices[i - PREVIOUS] + lowPrices[i - PREVIOUS]) / 2;

    boxRatios[i - PREVIOUS] = volumes[i - PREVIOUS] / (highPrices[i] - lowPrices[i]);
    boxRatios[i - PREVIOUS] /= (findMaxValue(volumes));

    oneDayIndicators[i - PREVIOUS] = distanceRatios[i - PREVIOUS] / boxRatios[i - PREVIOUS];
  }

  const twoWeeksIndicators = new Array(QUOTES);

  for (let i = DAYS - 1; i < (DAYS - 1 + QUOTES); i += 1) {
    twoWeeksIndicators[i - DAYS + 1] = countAverage(oneDayIndicators.slice(i - DAYS + 1, i + 1));
    twoWeeksIndicators[i - DAYS + 1] = twoWeeksIndicators[i - DAYS + 1].toFixed(3);
  }

  return twoWeeksIndicators;
};

export default countEaseOfMovementIndicators;
