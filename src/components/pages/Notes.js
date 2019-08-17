import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Online from 'components/templates/Online';
import Header from 'components/atoms/Header/Header';
import Input from 'components/atoms/Input/Input';
import Card from 'components/molecules/Card/Card';
import Button from 'components/atoms/Button/Button';
import AddItemPanel from 'components/organisms/AddItemPanel/AddItemPanel';
import { fetchItemsAction } from 'actions/fetchItems';
import Loader from 'components/atoms/Loader/Loader';

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
    searchString: '',
  };

  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  togglePanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  handleChange = (event) => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    const { notes, isLoading } = this.props;
    const { isPanelVisible, searchString } = this.state;

    let items = notes;
    const string = searchString.trim().toLowerCase();
    if (string.length > 0) {
      items = items.filter(note => note.title.toLowerCase().match(string));
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
            Notes
          </Header>
          <Input
            search
            value={searchString}
            onChange={this.handleChange}
            placeholder="Find by note title…"
          />
          <Board>
            {items.map(({
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
          <Button fixed onClick={this.togglePanel}>
            {isPanelVisible ? 'Close' : 'New note'}
          </Button>
          <AddItemPanel
            itemType="notes"
            isVisible={isPanelVisible}
            handleClose={this.togglePanel}
          />
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
  fetchNotes: () => dispatch(fetchItemsAction('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
