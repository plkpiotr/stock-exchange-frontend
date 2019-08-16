import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import routes from 'constants/routes';

export default (WrappedComponent) => {
  class Authenticator extends React.Component {
    componentWillMount() {
      const { isAuthenticated, history } = this.props;
      if (!isAuthenticated) {
        history.push(routes.login);
      }
    }

    componentWillUpdate(nextProps) {
      const { history } = this.props;
      if (!nextProps.isAuthenticated) {
        history.push(routes.login);
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  Authenticator.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  const mapStateToProps = ({ isAuthenticated }) => ({
    isAuthenticated,
  });

  return connect(mapStateToProps)(Authenticator);
};
