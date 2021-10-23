import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ type, children }) =>
  React.createElement(
    styled(type)`
      font-family: 'Poppins', sans-serif;
      font-weight: ${({ theme }) => theme.bold};
      font-size: ${({ theme }) => (type === 'h1' ? theme.x : theme.l)};
      margin-right: 15px;
    `,
    {},
    children,
  );

Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
Heading.defaultProps = {
  type: 'h1',
};

export default Heading;
