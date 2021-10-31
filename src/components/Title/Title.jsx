import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = ({ type, children }) =>
  React.createElement(
    styled(type)`
      font-family: 'Poppins', sans-serif;
      font-weight: ${({ theme }) => theme.bold};
      font-size: ${({ theme }) => (type === 'h1' ? theme.x : theme.l)};
      margin-right: 0.9em;
    `,
    {},
    children,
  );

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
Title.defaultProps = {
  type: 'h2',
};

export default Title;
