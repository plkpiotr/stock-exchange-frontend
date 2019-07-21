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
  padding: 5px 30px;
  background-color: white;
`;

const Date = styled.div`
  color: ${({ theme }) => (theme.gray)};
  font-weight: ${({ theme }) => (theme.gray)};
  float: right;
  display: flex;
  padding-top: 5px;
`;

const linkIcon = '\u25b6';

const Card = ({
  type, title, description, link, created,
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>See details</Button>
    { type === 'article' ? <Button href={link}>{linkIcon}</Button> : null }
    <Date>{created}</Date>
  </Wrapper>
);

Card.propTypes = {
  type: PropTypes.oneOf(['article', 'note']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default Card;
