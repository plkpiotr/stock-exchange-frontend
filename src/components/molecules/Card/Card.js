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
  min-height: 168px;
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

const shortenLine = (str, max) => (str.length > max ? str.substring(0, max).concat('…') : str);

class Card extends Component {
  state = {
    redirect: false,
  };

  toggleButtonDetails = () => this.setState({ redirect: true });

  render() {
    const {
      _id, itemType, title, description, link, created, removeItem,
    } = this.props;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect push to={`/${itemType}/${_id}`} />;
    }

    return (
      <Wrapper>
        <Title>{shortenLine(title, 27)}</Title>
        <Description>{shortenLine(description.split('\n')[0], 40)}</Description>
        <Link onClick={this.toggleButtonDetails}>See details</Link>
        <Link light onClick={() => removeItem(itemType, _id)}>{deleteIcon}</Link>
        {itemType === 'articles' ? <Link light href={link}>{linkIcon}</Link> : null}
        <Date>
          {moment(created)
            .format('L')}
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
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  link: null,
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
