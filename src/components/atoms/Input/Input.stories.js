import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';
import theme from '../../../theme/theme';

storiesOf('Input', module)
  .add('Blue plain', () => <Input color={theme.blue} />)
  .add('Violet search', () => <Input color={theme.violet} icon />);
