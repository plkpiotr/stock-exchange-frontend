import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import routes from 'constants/routes';
import { authorizeAction } from 'actions/authorize';
import Link from 'components/atoms/Link/Link';
import Description from 'components/atoms/Description/Description';
import Offline from 'components/templates/Offline';
import {
  Formik,
  Form,
} from 'formik';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  display: inline;
`;

const Login = ({ isAuthenticated, login }) => (
  <Offline>
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
        if (isAuthenticated) {
          return <Redirect push to={routes.dashboard} />;
        }
        return (
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
            <Button type="submit">Sign in</Button>
            <Description secondary>
              Icons made by
              {' '}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>
              {' '}
              from
              {' '}
              <a
                href="https://www.flaticon.com/"
                title="Flaticon"
              >
                flaticon.com
              </a>
            </Description>
            <Footer>
              <Link center href={routes.register}>Register</Link>
              <Link center href="https://github.com/plkpiotr/stock-exchange-frontend">
                Source code
              </Link>
            </Footer>
          </StyledForm>
        );
      }}
    </Formik>
  </Offline>
);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ isAuthenticated }) => ({
  isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(authorizeAction(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
