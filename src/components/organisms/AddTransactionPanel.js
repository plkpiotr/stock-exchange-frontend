import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Select from 'components/atoms/Select';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import Description from 'components/atoms/Description';
import symbols from 'constants/symbols';
import { connect } from 'react-redux';
import { addTransactionAction } from 'actions/addTransaction';
import {
  date,
  object,
  string,
} from 'yup';
import { Formik, Form } from 'formik';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 60px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 420px;
  background-color: ${({ theme }) => (theme.quaternary)};
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: .3s ease;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const AddTransactionPanel = ({
  isVisible, addTransaction, handleClose,
}) => (
  <Wrapper isVisible={isVisible}>
    <Title panel>Add new transaction</Title>
    <Formik
      initialValues={{
        symbol: 'ALIOR',
        date: '',
        amount: 0.01,
        comment: 'Normal transaction',
      }}
      onSubmit={(values) => {
        addTransaction(values);
        handleClose();
      }}
      validationSchema={object()
        .shape({
          date: date()
            .min(new Date('04-12-1991'))
            .max(new Date())
            .required(),
          amount: string()
            .matches(/^[-]?[0-9]+(\.[0-9]{2})?$/)
            .required(),
          comment: string()
            .max(40)
            .required(),
        })}
    >
      {({
        values, handleChange, handleBlur, errors, touched,
      }) => (
        <StyledForm>
          <Description panel>Select symbol:</Description>
          <Select
            name="symbol"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.symbol}
          >
            {symbols.map(symbol => (
              <option value={symbol} label={symbol} key={symbol} />
            ))}
          </Select>
          <Description panel>Transaction date:</Description>
          <Input
            name="date"
            type="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.date}
            className={`${errors.date && touched.date && 'invalid'}`}
          />
          <Description panel>Amount:</Description>
          <Input
            name="amount"
            type="number"
            step="0.01"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}
            className={`${errors.amount && touched.amount && 'invalid'}`}
          />
          <Description panel>Comment:</Description>
          <Input
            name="comment"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comment}
            className={`${errors.comment && touched.comment && 'invalid'}`}
          />
          <Button type="submit">Add</Button>
        </StyledForm>
      )}
    </Formik>
  </Wrapper>
);

AddTransactionPanel.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  addTransaction: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addTransaction: itemContent => dispatch(addTransactionAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(AddTransactionPanel);
