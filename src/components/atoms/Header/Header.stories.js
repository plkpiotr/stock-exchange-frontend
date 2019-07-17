import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Header', module)
  .add('Blue', () => <Header blue>Example text</Header>)
  .add('Pink', () => <Header pink>Example text</Header>)
  .add('Violet', () => <Header violet>Example text</Header>);
