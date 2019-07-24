import React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from './Panel';

storiesOf('Organisms', module)
  .add('Panel (articles)', () => <Panel type="articles" isVisible="true" />)
  .add('Panel (notes)', () => <Panel type="notes" isVisible="true" />);
