import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import routes from 'constants/routes';
import Link from 'components/atoms/Link';
import Error from 'components/atoms/Error';
import Offline from 'components/templates/Offline';
import Recaptcha from 'react-recaptcha';
import { string, object } from 'yup';
import { registerAction } from 'actions/register';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 15px;
`;

const Footer = styled.div`
  padding-top: 5px;
`;

class Register extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  render() {
    const { isAuthenticated, register } = this.props;
    return (
      <Offline>
        <Formik
          initialValues={{
            email: '',
            password: '',
            recaptcha: '',
          }}
          onSubmit={({ email, password }) => {
            register(email, password);
          }}
          validationSchema={object()
            .shape({
              email: string()
                .required('Email is required')
                .email('Invalid email address'),
              password: string()
                .required('Password is required')
                .max(35, 'Password is too long'),
              recaptcha: string()
                .required('ReCaptcha checkbox is required'),
            })}
        >
          {({
            values, handleChange, handleBlur, setFieldValue, errors, touched,
          }) => {
            if (isAuthenticated) {
              return <Redirect push to={routes.dashboard} />;
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
                  <Recaptcha
                    sitekey="6Ledf7MUAAAAAAcEP6SnpweviU8EqsvbVPYLLhgi"
                    render="explicit"
                    verifyCallback={(response) => {
                      setFieldValue('recaptcha', response);
                    }}
                    onloadCallback={() => {
                      console.log('ReCaptcha has been loaded');
                    }}
                  />
                </Container>
                {errors.recaptcha && touched.recaptcha && (<Error>{errors.recaptcha}</Error>)}
                <Footer>
                  <Link small href={routes.login}>Sign in</Link>
                  <Button type="submit">Sign up</Button>
                  <Link small href="https://github.com/plkpiotr/stock-exchange-frontend">
                    GitHub
                  </Link>
                </Footer>
              </StyledForm>
            );
          }}
        </Formik>
      </Offline>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ isAuthenticated }) => ({
  isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  register: (email, password) => dispatch(registerAction(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
