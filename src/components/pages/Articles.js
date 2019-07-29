import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Online from 'components/templates/Online';
import Header from 'components/atoms/Header/Header';
import Input from 'components/atoms/Input/Input';
import Card from 'components/molecules/Card/Card';
import Button from 'components/atoms/Button/Button';
import Panel from 'components/organisms/Panel/Panel';
import { getItemsAction } from 'actions/actions';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Loading = styled.div`
  color: ${({ theme }) => (theme.primary)};
`;

class Articles extends Component {
  state = {
    isPanelVisible: false,
  };

  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  toggleButtonPanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  render() {
    const { articles, isLoading } = this.props;
    const { isPanelVisible } = this.state;
    return (
      <Online>
        <Wrapper>
          <Header>
            Your articles
            {' '}
            {!isLoading && `[${articles.length}]`}
          </Header>
          <Input search placeholder="Find by title..." />
          <Board>
            {isLoading && <Loading>Loading</Loading>}
            {articles.map(({
              _id, title, description, created, link,
            }) => (
              <Card
                type="articles"
                _id={_id}
                title={title}
                description={description}
                created={created}
                link={link}
                key={_id}
              />
            ))}
          </Board>
          <Button fixed onClick={this.toggleButtonPanel}>
            {isPanelVisible ? 'Close' : 'New article'}
          </Button>
          <Panel type="articles" isVisible={isPanelVisible} handleClose={this.toggleButtonPanel} />
        </Wrapper>
      </Online>
    );
  }
}

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles, isLoading }) => ({ articles, isLoading });

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(getItemsAction('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
