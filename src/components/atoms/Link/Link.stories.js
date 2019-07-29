import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

storiesOf('Atoms', module)
  .add('Link', () => <Link href="/#">{'\u25b6'}</Link>);
