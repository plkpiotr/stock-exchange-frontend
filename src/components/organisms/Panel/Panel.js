import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
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
  background-color: ${({ theme }) => (theme.tertiary)};
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: .3s ease;
`;

const Description = styled(Input)`
  resize: none;
  height: 40vh;
  min-height: 250px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const Panel = ({ type, isVisible, handleClose }) => (
  <Wrapper isVisible={isVisible}>
    <Title>
      Add new
      {' '}
      {type.slice(0, -1)}
    </Title>
    <Formik
      initialValues={{
        title: '',
        description: '',
        link: '',
      }}
      onSubmit={(values) => {
        console.log(`Formik test: ${values.link}`);
        handleClose();
      }}
    >
      {({
        values, handleChange, handleBlur,
      }) => (
        <StyledForm>
          <Input
            placeholder="Title"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <Description
            placeholder="Description"
            as="textarea"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          {type === 'articles'
          && (
            <Input
              placeholder="Link"
              type="text"
              name="link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.link}
            />
          )}
          <Button type="submit">Add</Button>
        </StyledForm>
      )}
    </Formik>
  </Wrapper>
);

Panel.propTypes = {
  type: PropTypes.oneOf(['articles', 'notes']).isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Panel;
