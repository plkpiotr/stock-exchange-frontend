import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Span from 'components/atoms/Span';
import Button from 'components/atoms/Button';
import moment from 'moment';
import unicodes from 'constants/unicodes';
import { connect } from 'react-redux';
import { stylizeNumber } from 'utils/format';
import { deleteTransactionAction } from 'actions/deleteTransaction';

const DescriptionTerm = styled.dt`
  background-color: ${({ theme }) => (theme.quaternary)};
  cursor: pointer;
  font-weight: ${({ theme }) => (theme.bold)};
  transition: .7s ease;
  display: grid;
  padding: 4px 0;
  grid-template-columns: 1fr 3fr 12fr repeat(3, 1fr);
  color: ${({ theme }) => (theme.gray)};
  
  &:hover {
    background-color: ${({ theme }) => (theme.tertiary)};
    transition: .3s ease;
  }
`;

const DescriptionDetails = styled.dd`
  overflow: auto;
  max-height: 0;
  margin: 0;
  padding: 0;
  transition: max-height .7s;
  background-color: ${({ theme }) => (theme.quaternary)};
  display: grid;
  grid-template-columns: 1fr 3fr 8fr 4fr repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  
  &.expanded {
     max-height: 31px;
  }
`;

const AccordionElement = (props) => {
  const {
    title, expanded, onClick, transactions, deleteTransaction,
  } = props;

  return (
    <>
      <DescriptionTerm onClick={onClick}>
        <Span />
        <Span>{title}</Span>
        <Span right primary>
          {stylizeNumber(transactions.reduce((sum, t) => (t.amount) + sum, 0), 'PLN')}
        </Span>
        <Span />
        <Span center>{transactions.length}</Span>
        <Span />
      </DescriptionTerm>
      {transactions.sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(transaction => (
          <DescriptionDetails className={expanded ? 'expanded' : ''} key={transaction._id}>
            <Span />
            <Span primary>{moment(transaction.date).format('L')}</Span>
            <Span>{transaction.comment}</Span>
            <Span right primary>{stylizeNumber(transaction.amount, 'PLN')}</Span>
            <Span />
            <Button column onClick={() => deleteTransaction(transaction._id)}>
              {unicodes.cross}
            </Button>
            <Span />
          </DescriptionDetails>
        ))}
    </>
  );
};

AccordionElement.propTypes = {
  title: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  })).isRequired,
};

AccordionElement.defaultProps = {
  expanded: false,
};

const mapDispatchToProps = dispatch => ({
  deleteTransaction: id => dispatch(deleteTransactionAction(id)),
});

export default connect(null, mapDispatchToProps)(AccordionElement);
