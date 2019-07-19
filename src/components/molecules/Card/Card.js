import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  max-width: 364px;
  max-height: 340px;
  margin : 2vh 2vw 3vh 0;
  padding: 5px 40px;
  background-color: white;
  box-shadow: 2px 6px 6px 3px ${({ theme }) => (theme.gray)};
`;

const Date = styled.div`
  color: ${({ theme }) => (theme.gray)};
  float: right;
  display: flex;
  padding-top: 5px;
`;

const link = '\u25b6';

const Card = ({ type }) => (
  <Wrapper>
    <Title>News service and weather</Title>
    <Description>
      All material is for informational purposes only and no material (including, without
      limitation, stock quotes or company information).
    </Description>
    <Button>See details</Button>
    { type === 'article' ? <Button>{link}</Button> : null }
    <Date>07/19/2019</Date>
  </Wrapper>
);

Card.propTypes = {
  type: PropTypes.oneOf(['article', 'note']).isRequired,
};

export default Card;
