import React from 'react';
import { storiesOf } from '@storybook/react';
import Details from './Details';

storiesOf('Molecules', module)
  .add('Details (Article)', () => <Details type="articles" />)
  .add('Details (Note)', () => <Details type="notes" />);
