import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

storiesOf('Organisms', module)
  .addDecorator(StoryRouter())
  .add('Sidebar', () => <Sidebar />);
