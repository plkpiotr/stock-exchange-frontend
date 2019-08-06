import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import Button from 'components/atoms/Button/Button';
import Link from 'components/atoms/Link/Link';
import moment from 'moment';
import EditItemPanel from 'components/organisms/EditItemPanel/EditItemPanel';
import styled from 'styled-components';
import { fetchItemAction } from 'actions/actions';

const Wrapper = styled.div` {
  background-color: ${({ theme }) => (theme.tertiary)};
  padding: 4vh 3vw;
  margin-top: 3vh;
  margin-right: 55px;
  max-width: 1200px;
  overflow-wrap: break-word;
`;

class Details extends Component {
  state = {
    isPanelVisible: false,
  };

  componentDidMount() {
    const { fetchItem } = this.props;
    fetchItem();
  }

  toggleButtonPanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  render() {
    const { item, isLoading, type } = this.props;
    const { isPanelVisible } = this.state;
    if (isLoading) {
      return (
        <div>
          Loading
        </div>
      );
    }
    return (
      <Wrapper>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Description secondary>
          {`Created: ${moment(item.created).format('lll')}`}
        </Description>
        {' '}
        {item.modified
        && (
        <Description secondary>
          {`Modified: ${moment(item.modified).format('lll')}`}
        </Description>
        )}
        {type === 'articles' ? <Link href={item.link}>Link</Link> : null}
        <Button fixed onClick={this.toggleButtonPanel}>
          {isPanelVisible ? 'Close' : 'Edit'}
        </Button>
        <EditItemPanel
          item={item}
          itemType={type}
          isVisible={isPanelVisible}
          handleClose={this.toggleButtonPanel}
        />
      </Wrapper>
    );
  }
}

Details.propTypes = {
  fetchItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  type: PropTypes.oneOf(['articles', 'notes']).isRequired,
  item: PropTypes.shape({
    description: PropTypes.string,
    _id: PropTypes.string,
    title: PropTypes.string,
    created: PropTypes.string,
    modified: PropTypes.string,
    link: PropTypes.string,
  }),
};

Details.defaultProps = {
  item: {},
  isLoading: true,
};

const mapStateToProps = ({ item, isLoading }) => ({
  item,
  isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItem: () => dispatch(fetchItemAction(ownProps.type, ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
