/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from 'components/atoms/Title/Title';
import Description from 'components/atoms/Description/Description';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Link from 'components/atoms/Link/Link';
import axios from 'axios';
import url from 'routes/url';

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
          this.setState({ activeItem: data });
          console.log(data);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;
    return (
      <>
        <Paragraph>{activeItem.created}</Paragraph>
        <Paragraph>{activeItem.modified}</Paragraph>
        <Title>{activeItem.title}</Title>
        <Description>{activeItem.description}</Description>
        <Button fixed>Edit</Button>
        <Button>Remove</Button>
        {activeItem.type === 'articles' ? <Link href={activeItem.link}>Link</Link> : null}
      </>
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
