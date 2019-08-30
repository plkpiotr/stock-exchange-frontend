import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import Title from 'components/atoms/Title';
import Description from 'components/atoms/Description';
import Button from 'components/atoms/Button';
import Link from 'components/atoms/Link';
import EditItemPanel from 'components/organisms/EditItemPanel';
import Loader from 'components/atoms/Loader';
import { connect } from 'react-redux';
import { fetchItemAction } from 'actions/fetchItem';

const Wrapper = styled.div` {
  background-color: ${({ theme }) => (theme.quaternary)};
  padding: 4vh 2vw;
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

  togglePanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  render() {
    const { item, isLoading, type } = this.props;
    const { isPanelVisible } = this.state;
    if (isLoading) {
      return (
        <Loader />
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
        <Button fixed onClick={this.togglePanel}>
          {isPanelVisible ? 'Close' : 'Edit'}
        </Button>
        <EditItemPanel
          item={item}
          itemType={type}
          isVisible={isPanelVisible}
          handleClose={this.togglePanel}
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
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    created: PropTypes.string,
    modified: PropTypes.string,
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
