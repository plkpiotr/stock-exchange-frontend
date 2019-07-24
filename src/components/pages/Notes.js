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

class Notes extends Component {
  state = {
    isPanelVisible: false,
  };

  handleButtonPanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  render() {
    const { notes } = this.props;
    const { isPanelVisible } = this.state;
    return (
      <Online>
        <Wrapper>
          <Header>
            Your notes [
            {notes.length}
            ]
          </Header>
          <Input search placeholder="Find by title..." />
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
          <Button add onClick={this.handleButtonPanel}>
            {isPanelVisible ? 'Close' : 'New note'}
          </Button>
          <Panel type="notes" isVisible={isPanelVisible} />
        </Wrapper>
      </Online>
    );
  }
}

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
