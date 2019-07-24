import React from 'react';
import PropTypes from 'prop-types';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import Button from 'components/atoms/Button/Button';
import Link from 'components/atoms/Link/Link';

const Details = ({
  type, title, description, link, created, modified,
}) => (
  <>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>Edit</Button>
    <Button>Remove</Button>
    {type === 'articles' ? <Link href={link}>Link</Link> : null}
    <p>{created}</p>
    <p>{modified}</p>
  </>
);

Details.propTypes = {
  type: PropTypes.oneOf(['articles', 'notes']).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  created: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
};

Details.defaultProps = {
  link: null,
};

export default Details;
