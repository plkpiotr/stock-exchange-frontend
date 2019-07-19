import React from 'react';
import User from 'components/templates/User/User';
import styled from 'styled-components';
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

const Articles = () => (
  <User>
    <Wrapper>
      <Header>Your articles [4]</Header>
      <Paragraph>Find by title:</Paragraph>
      <Input search />
      <Board>
        <Card type="article" />
        <Card type="article" />
        <Card type="article" />
        <Card type="article" />
      </Board>
    </Wrapper>
  </User>
);

export default Articles;
