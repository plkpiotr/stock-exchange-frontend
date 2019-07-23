import React from 'react';
import { storiesOf } from '@storybook/react';
import dashboard from 'icons/dashboard.svg';
import note from 'icons/notes.svg';
import Icon from './Icon';

storiesOf('Atoms', module)
  .add('Icon (plain)', () => <Icon icon={dashboard}>Dashboard</Icon>)
  .add('Icon (add)', () => <Icon add icon={note}>New note</Icon>);
