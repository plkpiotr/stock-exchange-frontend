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
import { fetchAction } from 'actions/actions';
import Animation from 'utils/Animation';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
  animation: ${Animation} .3s ease;
`;

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Notes extends Component {
  state = {
    isPanelVisible: false,
  };

  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  toggleButtonPanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  render() {
    const { notes, isLoading } = this.props;
    const { isPanelVisible } = this.state;
    return (
      <Online>
        <Wrapper>
          <Header>
            Your notes
            {' '}
            {!isLoading && `[${notes.length}]`}
          </Header>
          <Input search placeholder="Find by title…" />
          <Board>
            {notes.map(({
              _id, title, description, created,
            }) => (
              <Card
                itemType="notes"
                _id={_id}
                title={title}
                description={description}
                created={created}
                key={_id}
              />
            ))}
          </Board>
          <Button fixed onClick={this.toggleButtonPanel}>
            {isPanelVisible ? 'Close' : 'New note'}
          </Button>
          <Panel itemType="notes" isVisible={isPanelVisible} handleClose={this.toggleButtonPanel} />
        </Wrapper>
      </Online>
    );
  }
}

Notes.propTypes = {
  fetchNotes: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  notes: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  })),
};

Notes.defaultProps = {
  notes: [],
  isLoading: true,
};

const mapStateToProps = ({ notes, isLoading }) => ({ notes, isLoading });

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchAction('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
