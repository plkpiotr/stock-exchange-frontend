import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules', module)
  .add('Card (Article)', () => <Card type="article" />)
  .add('Card (Note)', () => <Card type="note" />);
