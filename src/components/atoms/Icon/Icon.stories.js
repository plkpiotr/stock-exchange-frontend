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
import theme from '../../../theme/theme';

storiesOf('Icon', module)
  .add('Dashboard', () => <Icon active icon={dashboard} color={theme.blue}>Dashboard</Icon>)
  .add('Quotes', () => <Icon icon={quotes} color={theme.pink}>Quotes</Icon>)
  .add('Indicators', () => <Icon icon={indicators} color={theme.violet}>Indicators</Icon>)
  .add('Transactions', () => <Icon icon={transactions} color={theme.blue}>Transactions</Icon>)
  .add('Articles', () => <Icon icon={articles} color={theme.pink}>Articles</Icon>)
  .add('Notes', () => <Icon icon={notes} color={theme.violet}>Notes</Icon>)
  .add('Log out', () => <Icon icon={logout} color={theme.blue}>Log out</Icon>);
