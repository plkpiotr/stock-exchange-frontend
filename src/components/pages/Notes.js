import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Online from 'components/templates/Online';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Card from 'components/molecules/Card/Card';
import Icon from 'components/atoms/Icon/Icon';
import note from 'icons/notes.svg';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Notes = ({ notes }) => (
  <Online>
    <Wrapper>
      <Header>
        Your notes [
        {notes.length}
        ]
      </Header>
      <Paragraph>Find by title:</Paragraph>
      <Input search />
      <Board>
        {notes.map(({
          id, title, description, created,
        }) => (
          <Card
            type="notes"
            id={id}
            title={title}
            description={description}
            created={created}
          />
        ))}
      </Board>
      <Icon add icon={note}>New note</Icon>
    </Wrapper>
  </Online>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  })),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
