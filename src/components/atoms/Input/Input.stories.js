import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input', module)
  .add('Input', () => <Input />)
  .add('Input with icon', () => <Input icon />);
