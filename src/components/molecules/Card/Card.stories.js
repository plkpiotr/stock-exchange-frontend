import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules', module)
  .add('Card (articles)', () => (
    <Card
      type="articles"
      title="News service and weather"
      description="All material is for informational purposes only and no material (including,
      without limitation, stock quotes or company information)."
      id="5d27d297877d7856c0fa3a11"
      created="09/09/2019"
      link="https://github.com/plkpiotr/stock-exchange-frontend"
    />
  ))
  .add('Card (notes)', () => (
    <Card
      type="notes"
      title="The non-profit exchange"
      description="The link exchange is trying to solve the common problem webmasters have that
      it takes time to exchange links with other websites."
      id="5d289a937ad3732dec78b011"
      created="10/10/2019"
    />
  ));
