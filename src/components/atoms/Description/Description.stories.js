import React from 'react';
import { storiesOf } from '@storybook/react';
import Description from './Description';

storiesOf('Atoms', module)
  .add('Description', () => (
    <Description>
    All material is for informational purposes only and no material (including, without limitation,
    stock quotes or company information) is intended to be relied upon for trading or investment
    purposes.
    </Description>
  ));
