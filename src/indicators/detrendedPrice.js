import { QUOTES } from 'components/pages/Indicators';
import { countAverage } from 'utils/calculation';

const DAYS = 20;

export const countDetrendedPriceOscillators = (quotes) => {
  const closePrices = quotes.map(column => column[4])
    .slice(0, DAYS - 1 + QUOTES)
    .reverse();

  const oscillators = new Array(QUOTES);

  for (let i = DAYS - 1; i < (DAYS - 1 + QUOTES); i += 1) {
    oscillators[i - DAYS + 1] = closePrices[i - (DAYS / 2 - 1) + 1];
    oscillators[i - DAYS + 1] -= countAverage(closePrices.slice(i - DAYS + 1, i + 1));
    oscillators[i - DAYS + 1] = oscillators[i - DAYS + 1].toFixed(3);
  }

  return oscillators;
};

export default countDetrendedPriceOscillators;
