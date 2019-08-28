import { QUOTES } from 'components/pages/Indicators';

const DAYS = 14;

export const countRateOfChangesIndicators = (quotes) => {
  const closePrices = quotes.map(column => column[4])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();

  const indicators = new Array(QUOTES);

  for (let i = DAYS - 1; i < (DAYS - 1 + QUOTES); i += 1) {
    indicators[i - DAYS + 1] = (closePrices[i] / closePrices[i - DAYS + 1]) - 1;
    indicators[i - DAYS + 1] *= 100;
    indicators[i - DAYS + 1] = indicators[i - DAYS + 1].toFixed(2);
  }

  return indicators;
};

export default countRateOfChangesIndicators;
