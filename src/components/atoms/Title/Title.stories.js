import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title';

storiesOf('Title', module)
  .add('Title', () => <Title>Example title</Title>);
