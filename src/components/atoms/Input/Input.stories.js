import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Atoms', module)
  .add('Input (plain)', () => <Input />)
  .add('Input (search)', () => <Input icon />);
