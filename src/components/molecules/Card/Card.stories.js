import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules', module)
  .add('Card (Article)', () => <Card type="articles" />)
  .add('Card (Note)', () => <Card type="notes" />);
