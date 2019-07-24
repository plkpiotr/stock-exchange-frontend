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
  };

  handleButtonPanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  render() {
    const { articles } = this.props;
    const { isPanelVisible } = this.state;
    return (
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
          <Button add onClick={this.handleButtonPanel}>
            {isPanelVisible ? 'Close' : 'New article'}
          </Button>
          <Panel type="articles" isVisible={isPanelVisible} />
        </Wrapper>
      </Online>
    );
  }
}


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
