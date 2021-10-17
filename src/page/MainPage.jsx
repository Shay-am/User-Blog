import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import { DescriptionHeader, Card } from 'components';

const MainPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
`;

const MainPage = () => (
  <>
    <Header />
    <MainPageWrapper>
      <DescriptionHeader />
    </MainPageWrapper>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </>
);

export default MainPage;
