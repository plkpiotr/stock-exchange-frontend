import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Title from 'components/atoms/Title/Title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh 35px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 420px;
  background-color: ${({ theme }) => (theme.tertiary)};  
`;

const Description = styled(Input)`
  resize: none;
  height: 70vh;
`;

const Panel = ({ type }) => (
  <Wrapper>
    <Title>
      Add new
      {' '}
      {type.slice(0, -1)}
    </Title>
    <Input placeholder="Title" />
    <Description as="textarea" placeholder="Description" />
    <Input placeholder="Link" />
    <Button>Confirm</Button>
  </Wrapper>
);

Panel.propTypes = {
  type: PropTypes.oneOf(['articles', 'notes']).isRequired,
};

export default Panel;
