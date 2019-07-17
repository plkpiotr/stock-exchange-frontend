import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Paragraph', module)
  .add('Paragraph', () => (
    <Paragraph>
    All material is for informational purposes only and no material (including, without limitation,
    stock quotes or company information) is intended to be relied upon for trading or investment
    purposes.
    </Paragraph>
  ));
