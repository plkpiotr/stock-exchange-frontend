import { QUOTES } from 'components/pages/Indicators';

const DAYS = 14;

export const countRateOfChangesIndicators = (quotes) => {
  const closePrices = quotes.map(column => column[4])
    .reverse()
    .slice(-(DAYS + QUOTES));

  const indicators = new Array(QUOTES);

  for (let i = DAYS; i < (DAYS + QUOTES); i += 1) {
    indicators[i - DAYS] = (closePrices[i] / closePrices[i - DAYS]) - 1;
    indicators[i - DAYS] *= 100;
    indicators[i - DAYS] = indicators[i - DAYS].toFixed(2);
  }

  return indicators;
};

export default countRateOfChangesIndicators;
