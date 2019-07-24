import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 60px 20px;
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
  height: 100vh;
`;

const Panel = ({ type, isVisible }) => (
  <Wrapper isVisible={isVisible}>
    <Title>
      Add new
      {' '}
      {type.slice(0, -1)}
    </Title>
    <Input placeholder="Title" />
    <Description as="textarea" placeholder="Description" />
    {type === 'articles' && <Input placeholder="Link" />}
    <Button>Add</Button>
  </Wrapper>
);

Panel.propTypes = {
  type: PropTypes.oneOf(['articles', 'notes']).isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Panel;
