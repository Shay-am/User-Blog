import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import { Description, Card } from 'components';

const MainPageWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const StyledDescriptionWrapper = styled.section`
  width: 80vw;
  word-spacing: 2px;
  margin-right: 10px;
`;

const StyledCard = styled.ul`
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
      <StyledDescriptionWrapper>
        <Description>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit... There is no one who loves pain itself,
          who seeks after it and wants to have it, simply because it is pain..
        </Description>
      </StyledDescriptionWrapper>
    </MainPageWrapper>
    <StyledCard>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
