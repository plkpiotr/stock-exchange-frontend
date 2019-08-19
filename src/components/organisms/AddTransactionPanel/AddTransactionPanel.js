import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import symbols from 'constants/symbols';
import { addTransactionAction } from 'actions/addTransaction';
import {
  date,
  object,
  ref,
  string,
} from 'yup';
import {
  Formik,
  Form,
} from 'formik';

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
        pricePurchase: 0.01,
        priceSale: 0.01,
        symbol: 'ALIOR',
        datePurchase: '',
        dateSale: '',
      }}
      onSubmit={(values) => {
        addTransaction(values);
        handleClose();
      }}
      validationSchema={object()
        .shape({
          pricePurchase: string()
            .matches(/^\d+(?:\.\d{2})$/)
            .required(),
          priceSale: string()
            .matches(/^\d+(?:\.\d{2})$/)
            .required(),
          datePurchase: date()
            .min(new Date('04-12-1991'))
            .max(new Date())
            .required(),
          dateSale: date()
            .min(ref('datePurchase'))
            .max(new Date())
            .required(),
        })}
    >
      {({
        values, handleChange, handleBlur, errors, touched,
      }) => (
        <StyledForm>
          <Description panel>Purchase price:</Description>
          <Input
            name="pricePurchase"
            type="number"
            step="0.01"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.pricePurchase}
            className={`${errors.pricePurchase && touched.pricePurchase && 'invalid'}`}
          />
          <Description panel>Sale price:</Description>
          <Input
            name="priceSale"
            type="number"
            step="0.01"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.priceSale}
            className={`${errors.priceSale && touched.priceSale && 'invalid'}`}
          />
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
          <Description panel>Date of purchase:</Description>
          <Input
            name="datePurchase"
            type="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.datePurchase}
            className={`${errors.datePurchase && touched.datePurchase && 'invalid'}`}
          />
          <Description panel>Date of sale:</Description>
          <Input
            name="dateSale"
            type="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dateSale}
            className={`${errors.dateSale && touched.dateSale && 'invalid'}`}
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
