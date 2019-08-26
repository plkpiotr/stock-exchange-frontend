import { QUOTES } from 'components/pages/Indicators';
import { countAverage } from 'utils/calculation';

const DAYS = 20;

export const countDetrendedPriceOscillators = (quotes) => {
  const closePrices = quotes.map(column => column[4])
    .reverse()
    .slice(-(DAYS + QUOTES));

  const oscillators = new Array(QUOTES);

  for (let i = DAYS; i < (DAYS + QUOTES); i += 1) {
    oscillators[i - DAYS] = closePrices[i - (DAYS / 2 + 1)];
    oscillators[i - DAYS] -= countAverage(closePrices.slice(i - DAYS, i));
  }

  return oscillators;
};

export default countDetrendedPriceOscillators;
