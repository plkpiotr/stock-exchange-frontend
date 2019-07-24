import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms', module)
  .add('Button', () => <Button>Button</Button>)
  .add('Button (add)', () => <Button>Button</Button>);
