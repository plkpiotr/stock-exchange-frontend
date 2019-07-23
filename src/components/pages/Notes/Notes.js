import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import User from 'components/templates/User/User';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Card from 'components/molecules/Card/Card';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Notes = ({ notes }) => (
  <User>
    <Wrapper>
      <Header>
        Your notes [{notes.length}]
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
    </Wrapper>
  </User>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
