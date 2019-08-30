import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import routes from 'constants/routes';
import Link from 'components/atoms/Link';
import Description from 'components/atoms/Description';
import Error from 'components/atoms/Error';
import Offline from 'components/templates/Offline';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authorizeAction } from 'actions/authorize';
import { string, object } from 'yup';
import { Formik, Form } from 'formik';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding-top: 5px;
`;

const Footer = styled.div`
  padding-top: 30px;
  font-size: 13px;
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
      validationSchema={object()
        .shape({
          email: string()
            .required('Email is required')
            .email('Invalid email address'),
          password: string()
            .required('Password is required')
            .max(35, 'Password is too long'),
        })}
    >
      {({
        values, handleChange, handleBlur, errors, touched,
      }) => {
        if (isAuthenticated) {
          return <Redirect push to={routes.quotes} />;
        }
        return (
          <StyledForm>
            <Input
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={`${errors.email && touched.email && 'invalid'}`}
            />
            {errors.email && touched.email && (<Error>{errors.email}</Error>)}
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={`${errors.password && touched.password && 'invalid'}`}
            />
            {errors.password && touched.password && (<Error>{errors.password}</Error>)}
            <Container>
              <Link small href={routes.register}>Sign up</Link>
              <Button type="submit">Sign in</Button>
              <Link small href="https://github.com/plkpiotr/stock-exchange-frontend">
                GitHub
              </Link>
            </Container>
            <Footer>
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
                  www.flaticon.com
                </a>
              </Description>
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
