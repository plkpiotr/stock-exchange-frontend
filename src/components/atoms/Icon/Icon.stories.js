import React from 'react';
import { storiesOf } from '@storybook/react';
import dashboard from 'icons/dashboard.svg';
import quotes from 'icons/quotes.svg';
import indicators from 'icons/indicators.svg';
import transactions from 'icons/transactions.svg';
import articles from 'icons/articles.svg';
import notes from 'icons/notes.svg';
import logout from 'icons/logout.svg';
import Icon from './Icon';

storiesOf('Atoms', module)
  .add('Icon (Dashboard)', () => <Icon active icon={dashboard}>Dashboard</Icon>)
  .add('Icon (Quotes)', () => <Icon icon={quotes}>Quotes</Icon>)
  .add('Icon (Indicators)', () => <Icon icon={indicators}>Indicators</Icon>)
  .add('Icon (Transactions)', () => <Icon icon={transactions}>Transactions</Icon>)
  .add('Icon (Articles)', () => <Icon icon={articles}>Articles</Icon>)
  .add('Icon (Notes)', () => <Icon icon={notes}>Notes</Icon>)
  .add('Icon (Log out)', () => <Icon icon={logout}>Log out</Icon>);
