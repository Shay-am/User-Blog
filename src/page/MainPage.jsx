import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import { DescriptionHeader, Card } from 'components';

const MainPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledCard = styled.div`
  display: flex;
  width: 90vw;
  flex-wrap: wrap;
  justify-content: center;
  align-items: left;
`;

const MainPage = () => (
  <>
    <Header />
    <MainPageWrapper>
      <DescriptionHeader />
    </MainPageWrapper>
    <StyledCard>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledCard>
  </>
);

export default MainPage;
