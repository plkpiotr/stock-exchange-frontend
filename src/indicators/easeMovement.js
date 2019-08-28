import { QUOTES } from 'components/pages/Indicators';
import { countAverage, findMaxValue } from 'utils/calculation';

const PREVIOUS = 1;
const DAYS = 14;

export const countEaseOfMovementIndicators = (quotes) => {
  const highPrices = quotes.map(column => column[2])
    .reverse()
    .slice(-(PREVIOUS + DAYS + QUOTES));
  const lowPrices = quotes.map(column => column[3])
    .reverse()
    .slice(-(PREVIOUS + DAYS + QUOTES));
  const volumes = quotes.map(column => column[6])
    .reverse()
    .slice(-(DAYS + QUOTES));

  const distanceRatios = new Array(QUOTES + DAYS);
  const boxRatios = new Array(QUOTES + DAYS);
  const oneDayIndicators = new Array(QUOTES + DAYS);

  for (let i = PREVIOUS; i < (DAYS + QUOTES + PREVIOUS); i += 1) {
    distanceRatios[i - PREVIOUS] = (highPrices[i] + lowPrices[i]) / 2;
    distanceRatios[i - PREVIOUS] -= (highPrices[i - PREVIOUS] + lowPrices[i - PREVIOUS]) / 2;

    boxRatios[i - PREVIOUS] = volumes[i - PREVIOUS] / (highPrices[i] - lowPrices[i]);
    boxRatios[i - PREVIOUS] /= (findMaxValue(volumes));

    oneDayIndicators[i - PREVIOUS] = distanceRatios[i - PREVIOUS] / boxRatios[i - PREVIOUS];
  }

  const twoWeeksIndicators = new Array(QUOTES);

  for (let i = DAYS; i < (DAYS + QUOTES); i += 1) {
    twoWeeksIndicators[i - DAYS] = countAverage(oneDayIndicators.slice(i - DAYS, i));
    twoWeeksIndicators[i - DAYS] = twoWeeksIndicators[i - DAYS].toFixed(3);
  }

  return twoWeeksIndicators;
};

export default countEaseOfMovementIndicators;
