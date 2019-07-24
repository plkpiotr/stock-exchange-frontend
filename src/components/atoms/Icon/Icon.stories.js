import React from 'react';
import { storiesOf } from '@storybook/react';
import dashboard from 'icons/dashboard.svg';
import Icon from './Icon';

storiesOf('Atoms', module)
  .add('Icon', () => <Icon icon={dashboard}>Dashboard</Icon>);
