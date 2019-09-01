import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Online from 'components/templates/Online';
import Header from 'components/atoms/Header';
import Input from 'components/atoms/Input';
import Card from 'components/molecules/Card';
import Button from 'components/atoms/Button';
import AddItemPanel from 'components/organisms/AddItemPanel';
import Loader from 'components/atoms/Loader';
import { connect } from 'react-redux';
import { fetchItemsAction } from 'actions/fetchItems';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Articles extends Component {
  state = {
    isPanelVisible: false,
    searchString: '',
  };

  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  togglePanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  handleChange = (event) => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    const { articles, isLoading } = this.props;
    const { isPanelVisible, searchString } = this.state;

    let items = articles;
    const string = searchString.trim()
      .toLowerCase();
    if (string.length > 0) {
      items = items.filter(article => article.title.toLowerCase()
        .match(string));
    }

    if (isLoading) {
      return (
        <Online>
          <Loader />
        </Online>
      );
    }
    return (
      <Online>
        <Wrapper>
          <Header>
            Articles
          </Header>
          <Input
            search
            value={searchString}
            onChange={this.handleChange}
            placeholder="Find by article title…"
          />
          <Board>
            {items.sort((a, b) => new Date(a.created) - new Date(b.created))
              .map(({
                _id, title, description, created, link,
              }) => (
                <Card
                  itemType="articles"
                  _id={_id}
                  title={title}
                  description={description}
                  created={created}
                  link={link}
                  key={_id}
                />
              ))}
          </Board>
          <Button fixed onClick={this.togglePanel}>
            {isPanelVisible ? 'Close' : 'New article'}
          </Button>
          <AddItemPanel
            itemType="articles"
            isVisible={isPanelVisible}
            handleClose={this.togglePanel}
          />
        </Wrapper>
      </Online>
    );
  }
}

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
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
  isLoading: true,
};

const mapStateToProps = ({ articles, isLoading }) => ({
  articles,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchItemsAction('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
