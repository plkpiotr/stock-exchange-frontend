import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';
import { addAction } from 'actions/actions';
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

const TextArea = styled(Input)`
  resize: none;
  height: 40vh;
  min-height: 250px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemPanel = ({
  itemType, isVisible, addItem, handleClose,
}) => (
  <Wrapper isVisible={isVisible}>
    <Title>
      Add new
      {' '}
      {itemType.slice(0, -1)}
    </Title>
    <Formik
      initialValues={{
        title: '',
        description: '',
        link: '',
      }}
      onSubmit={(values) => {
        addItem(itemType, values);
        handleClose();
      }}
    >
      {({
        values, handleChange, handleBlur,
      }) => (
        <StyledForm>
          <Input
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <TextArea
            name="description"
            as="textarea"
            placeholder="Description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          {itemType === 'articles'
          && (
            <Input
              name="link"
              type="text"
              placeholder="Link"
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

NewItemPanel.propTypes = {
  itemType: PropTypes.oneOf(['articles', 'notes']).isRequired,
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(NewItemPanel);
