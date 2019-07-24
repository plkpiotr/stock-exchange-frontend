import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import loginAction from 'actions/actions';
import {
  Formik,
  Form,
} from 'formik';

const StyledForm = styled(Form)`
  background-color: ${({ theme }) => (theme.tertiary)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Login = ({ login }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    onSubmit={({ email, password }) => {
      login(email, password);
    }}
  >
    {({
      values, handleChange, handleBlur,
    }) => (
      <StyledForm>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <Button type="submit">Log in</Button>
      </StyledForm>
    )}
  </Formik>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginAction(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
