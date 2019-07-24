import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Atoms', module)
  .add('Input (plain)', () => <Input placeholder="Plain" />)
  .add('Input (search)', () => <Input search placeholder="Plain" />);
