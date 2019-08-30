import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import { connect } from 'react-redux';
import { addItemAction } from 'actions/addItem';
import { object, string } from 'yup';
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

const TextArea = styled(Input)`
  resize: none;
  height: 40vh;
  min-height: 250px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const AddItemPanel = ({
  itemType, isVisible, addItem, handleClose,
}) => (
  <Wrapper isVisible={isVisible}>
    <Title panel>
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
      validationSchema={((itemType === 'articles') ? (
        object()
          .shape({
            title: string().required(),
            description: string().required(),
            link: string().required(),
          })) : (
        object()
          .shape({
            title: string().required(),
            description: string().required(),
          })))}
    >
      {({
        values, handleChange, handleBlur, errors, touched,
      }) => (
        <StyledForm>
          <Input
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            className={`${errors.title && touched.title && 'invalid'}`}
          />
          <TextArea
            name="description"
            as="textarea"
            placeholder="Description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            className={`${errors.description && touched.description && 'invalid'}`}
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
              className={`${errors.link && touched.link && 'invalid'}`}
            />
          )}
          <Button type="submit">Add</Button>
        </StyledForm>
      )}
    </Formik>
  </Wrapper>
);

AddItemPanel.propTypes = {
  itemType: PropTypes.oneOf(['articles', 'notes']).isRequired,
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(AddItemPanel);
