import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  padding: 5px 40px;
  background-color: white;
  box-shadow: 5px 10px 15px 5px ${({ theme }) => (theme.gray)};
`;

const Card = ({ type }) => (
  <Wrapper>
    <Title>News service and weather forecast</Title>
    <Paragraph>
      All material is for informational purposes only and no material (including, without
      limitation, stock quotes or company information) is intended to be relied upon for trading or
      investment purposes.
    </Paragraph>
    { type === 'note' ? <Button>Link</Button> : null }
    <Button>Remove</Button>
  </Wrapper>
);

Card.propTypes = {
  type: PropTypes.oneOf(['article', 'note']).isRequired,
};

export default Card;
