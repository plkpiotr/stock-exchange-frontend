import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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

class Card extends Component {
  state = {
    redirect: false,
  };

  handleClickOnCard = () => this.setState({ redirect: true });

  render() {
    const {
      id, type, title, description, link, created,
    } = this.props;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect push to={`/${type}/${id}`} />;
    }

    return (
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button onClick={this.handleClickOnCard}>See details</Button>
        {type === 'articles' ? <Button href={link}>{linkIcon}</Button> : null}
        <Date>{created}</Date>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['articles', 'notes']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default Card;
