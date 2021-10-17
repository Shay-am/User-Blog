import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  width: 11rem;
`;

const TitleH1 = styled.h1`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  margin-right: 15px;
`;

const Title = () => (
  <>
    <TitleWrapper>
      <TitleH1>Users Blog</TitleH1>
    </TitleWrapper>
  </>
);

export default Title;
