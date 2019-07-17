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

storiesOf('Icon', module)
  .add('Dashboard', () => <Icon active icon={dashboard}>Dashboard</Icon>)
  .add('Quotes', () => <Icon icon={quotes}>Quotes</Icon>)
  .add('Indicators', () => <Icon icon={indicators}>Indicators</Icon>)
  .add('Transactions', () => <Icon icon={transactions}>Transactions</Icon>)
  .add('Articles', () => <Icon icon={articles}>Articles</Icon>)
  .add('Notes', () => <Icon icon={notes}>Notes</Icon>)
  .add('Log out', () => <Icon icon={logout}>Log out</Icon>);
