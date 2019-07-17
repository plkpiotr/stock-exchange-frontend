import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Plain', () => <Input />)
  .add('Search', () => <Input icon />);
