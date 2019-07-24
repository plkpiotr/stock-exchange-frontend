import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

storiesOf('Atoms', module)
  .add('Link', () => <Link href="/#">Link</Link>);
