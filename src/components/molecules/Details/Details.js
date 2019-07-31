/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import Button from 'components/atoms/Button/Button';
import Link from 'components/atoms/Link/Link';
import axios from 'axios';
import url from 'routes/url';
import moment from 'moment';
import styled from 'styled-components';

const Wrapper = styled.div` {
  background-color: ${({ theme }) => (theme.tertiary)};
  padding: 1vh 2vw 5vh;
  margin-top: 3vh;
  max-width: 1200px;
}
`;

const Some = styled.div` {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
`;

class Details extends Component {
  state = {
    activeItem: {
      title: '',
      description: '',
      type: '',
      link: '',
      created: '',
      modified: '',
    },
  };

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;
      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(`${url}/${this.props.type}/${id}`)
        .then(({ data }) => {
          this.setState({
            activeItem: data,
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Wrapper>
        <Title>{activeItem.title}</Title>
        <Description>{activeItem.description}</Description>
        <Some>
          <Description secondary>{`Created: ${moment(activeItem.created)
            .format('lll')}`}</Description>
          {' '}
          {activeItem.modified &&
          <Description secondary>{`Modified: ${moment(activeItem.modified)
            .format('lll')}`}</Description>}
        </Some>
        {this.props.type === 'articles' ? <Link href={activeItem.link}>Link</Link> : null}
        <Button fixed>Edit</Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.type]) {
    return {
      activeItem: state[ownProps.type].filter(item => item._id === ownProps.match.params.id),
    };
  }
  return {};
};

export default connect(mapStateToProps)(Details);
