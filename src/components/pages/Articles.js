import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Online from 'components/templates/Online';
import Header from 'components/atoms/Header/Header';
import Input from 'components/atoms/Input/Input';
import Card from 'components/molecules/Card/Card';
import Icon from 'components/atoms/Icon/Icon';
import article from 'icons/articles.svg';
import Panel from 'components/organisms/Panel/Panel';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Articles = ({ articles }) => (
  <Online>
    <Wrapper>
      <Header>
        Your articles [
        {articles.length}
        ]
      </Header>
      <Input search placeholder="Find by title..." />
      <Board>
        {articles.map(({
          id, title, description, created, link,
        }) => (
          <Card
            type="articles"
            id={id}
            title={title}
            description={description}
            created={created}
            link={link}
          />
        ))}
      </Board>
      <Icon add icon={article}>New article</Icon>
      <Panel type="articles" />
    </Wrapper>
  </Online>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
