import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import loginAction from 'actions/actions';
import routes from 'routes/routes';
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

const Login = ({ token, login }) => (
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
    }) => {
      if (token) {
        return <Redirect push to={routes.dashboard} />;
      }
      return (
        <StyledForm>
          <p>{token}</p>
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
      );
    }}
  </Formik>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  token: PropTypes.string,
};

Login.defaultProps = {
  token: null,
};

const mapStateToProps = ({ token = null }) => ({
  token,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginAction(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
