import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import Link from 'components/atoms/Link/Link';
import moment from 'moment';
import { removeAction } from 'actions/actions';

const Wrapper = styled.div`
  width: 364px;
  min-height: 218px;
  margin : 2vh 2vw 3vh 0;
  padding: 5px 30px 30px;
  background-color: ${({ theme }) => (theme.tertiary)};
`;

const Date = styled.div`
  color: ${({ theme }) => (theme.gray)};
  font-weight: ${({ theme }) => (theme.gray)};
  float: right;
  display: flex;
`;

const linkIcon = '\u25b6';
const deleteIcon = '\u2716';

const shortenString = (string, maxLength) => {
  if (string.length > maxLength) {
    const shortened = string.substring(0, maxLength);
    const lastSpace = shortened.lastIndexOf(' ');
    return `${shortened.substring(0, lastSpace)}...`;
  }
  return string;
};

class Card extends Component {
  state = {
    redirect: false,
  };

  toggleButtonDetails = () => this.setState({ redirect: true });

  render() {
    const {
      _id, type, title, description, link, created, removeItem,
    } = this.props;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect push to={`/${type}/${_id}`} />;
    }

    return (
      <Wrapper>
        <Title>{shortenString(title, 25)}</Title>
        <Description>{shortenString(description, 110)}</Description>
        <Link onClick={this.toggleButtonDetails}>See details</Link>
        <Link light onClick={() => removeItem(type, _id)}>{deleteIcon}</Link>
        {type === 'articles' ? <Link light href={link}>{linkIcon}</Link> : null}
        <Date>{moment(created).format('L')}</Date>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['articles', 'notes']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  created: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  link: null,
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
