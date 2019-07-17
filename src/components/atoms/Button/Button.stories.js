import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import theme from '../../../theme/theme';

storiesOf('Button', module)
  .add('Blue', () => <Button color={theme.blue} hover={theme.blueLight}>Blue button</Button>)
  .add('Pink', () => <Button color={theme.pink} hover={theme.pinkLight}>Pink button</Button>)
  .add('Violet', () => <Button color={theme.violet} hover={theme.violetLight}>Violet button</Button>);
