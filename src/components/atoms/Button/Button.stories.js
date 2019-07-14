import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Blue button', () => <Button blue>Blue button</Button>)
  .add('Pink button', () => <Button pink>Pink button</Button>)
  .add('Violet button', () => <Button violet>Violet button</Button>);
