import React from 'react';
import { storiesOf } from '@storybook/react';
import Details from './Details';

storiesOf('Molecules', module)
  .add('Details (articles)', () => (
    <Details
      type="articles"
      title="No backers would risk"
      description="Despite reductions in fishing quotas in recent years, sections of the cod stock are outside safe biological limits."
      link="https://github.com/plkpiotr/stock-exchange-backend"
      created="07/07/2019"
      modified="08/08/2019"
    />
  ))
  .add('Details (notes)', () => (
    <Details
      type="notes"
      title="Please forward the stock"
      description="In addition, the stock levels have increased and employment has decreased."
      created="11/11/2019"
      modified="12/12/2019"
    />
  ));
