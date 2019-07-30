import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Link from 'components/atoms/Link/Link';

const Details = ({ activeItem }) => {
  const [item] = activeItem;
  return (
    <>
      <Paragraph>{item.created}</Paragraph>
      <Paragraph>{item.modified}</Paragraph>
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
      <Button fixed>Edit</Button>
      <Button>Remove</Button>
      {item.type === 'articles' ? <Link href={item.link}>Link</Link> : null}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  activeItem: state.articles.filter(item => item._id === ownProps.match.params.id),
});

export default connect(mapStateToProps)(Details);
