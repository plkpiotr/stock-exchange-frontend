import React from 'react';
import { storiesOf } from '@storybook/react';
import Details from './Details';

storiesOf('Details', module)
  .add('Details (Article)', () => <Details type="article" />)
  .add('Details (Note)', () => <Details type="note" />);
