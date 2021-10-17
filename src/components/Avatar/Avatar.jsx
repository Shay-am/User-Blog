import React from 'react';
import styled from 'styled-components';
import Unsplash from 'react-unsplash-wrapper';

const AvatarWrapper = styled.div`
  position: relative;
`;

const Avatar = () => (
  <AvatarWrapper>
    <Unsplash
      width="100"
      height="100"
      keywords="face"
      style={{ borderRadius: 100 }}
    />
    ;
  </AvatarWrapper>
);

export default Avatar;
