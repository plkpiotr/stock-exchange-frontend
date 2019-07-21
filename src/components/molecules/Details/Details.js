import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import Button from 'components/atoms/Button/Button';

const Details = ({
  type, title, description, link, created, modified,
}) => (
  <>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>Edit</Button>
    <Button>Remove</Button>
    { type === 'article' ? <Button href={link}>Link</Button> : null }
    <p>{created}</p>
    <p>{modified}</p>
  </>
);

Details.propTypes = {
  type: PropTypes.oneOf(['article', 'note']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
};

export default Details;
