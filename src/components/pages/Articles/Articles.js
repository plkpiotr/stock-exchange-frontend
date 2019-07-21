import React from 'react';
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

const Articles = () => (
  <User>
    <Wrapper>
      <Header>Your articles [4]</Header>
      <Paragraph>Find by title:</Paragraph>
      <Input search />
      <Board>
        <Card type="articles" id="1" />
        <Card type="articles" id="2" />
        <Card type="articles" id="3" />
        <Card type="articles" id="4" />
      </Board>
    </Wrapper>
  </User>
);

export default Articles;
