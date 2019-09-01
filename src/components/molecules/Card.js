import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import Description from 'components/atoms/Description';
import Link from 'components/atoms/Link';
import Button from 'components/atoms/Button';
import moment from 'moment';
import unicodes from 'constants/unicodes';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { shortenLine } from 'utils/format';
import { deleteItemAction } from 'actions/deleteItem';

const Wrapper = styled.div`
  width: 363px;
  margin : 2vh 2vw 2vh 0;
  padding: 25px;
  background-color: ${({ theme }) => (theme.quaternary)};
  
  @media (min-width: 1920px) {
    width: 391.5px;
  }
`;

const Date = styled.div`
  color: ${({ theme }) => (theme.gray)};
  font-weight: ${({ theme }) => (theme.gray)};
  float: right;
  display: flex;
`;

const TITLE_LIMIT = 30;
const DESCRIPTION_LIMIT = 40;

class Card extends Component {
  state = {
    redirect: false,
  };

  redirectToDetails = () => this.setState({ redirect: true });

  render() {
    const {
      _id, itemType, title, description, link, created, deleteItem,
    } = this.props;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect push to={`/${itemType}/${_id}`} />;
    }

    return (
      <Wrapper>
        <Title>{shortenLine(title, TITLE_LIMIT)}</Title>
        <Description>{shortenLine(description.split('\n')[0], DESCRIPTION_LIMIT)}</Description>
        <Link onClick={this.redirectToDetails}>See details</Link>
        <Button line onClick={() => deleteItem(itemType, _id)}>{unicodes.cross}</Button>
        {itemType === 'articles' ? <Link line href={link}>{unicodes.link}</Link> : null}
        <Date>
          {moment(created).format('L')}
        </Date>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  itemType: PropTypes.oneOf(['articles', 'notes']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  created: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  link: null,
};

const mapDispatchToProps = dispatch => ({
  deleteItem: (itemType, id) => dispatch(deleteItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
