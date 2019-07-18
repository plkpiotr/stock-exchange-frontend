import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const User = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

User.propTypes = {
  children: PropTypes.element.isRequired,
};

export default User;
