import React from 'react';
import Unsplash from 'react-unsplash-wrapper';

const Avatar = ({ mini }) => (
  <>
    {!mini ? (
      <Unsplash
        width="100"
        height="100"
        keywords="face"
        style={{ borderRadius: 100 }}
      />
    ) : (
      <Unsplash
        width="30"
        height="30"
        keywords="face"
        style={{ borderRadius: 100 }}
      />
    )}
  </>
);

export default Avatar;
