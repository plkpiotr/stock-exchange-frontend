import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  .add('Article', () => <Card type="article" />)
  .add('Note', () => <Card type="note" />);
