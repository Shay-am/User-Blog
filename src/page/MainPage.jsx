import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Description, Card, PageWrapper } from 'components';
import Header from 'components/Header/Header';
import { useGetUsersQuery } from 'services/userApi';

const StyledDescriptionWrapper = styled.section`
  width: 80vw;
  word-spacing: 2px;
  margin: 10px 10px 40px 10px;
`;

const StyledCard = styled.ul`
  display: flex;
  width: 90vw;
  flex-wrap: wrap;
  justify-content: center;
  align-items: left;
`;

const MainPage = () => {
  const { data, isFetching } = useGetUsersQuery();

  useEffect(() => {
    // useGetUsersQuery();
  }, []);
  if (isFetching) return 'Loading';
  // eslint-disable-next-line
  console.log(data);
  return (
    <>
      <Header />
      <PageWrapper>
        <StyledDescriptionWrapper>
          <Description>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit... There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..
          </Description>
        </StyledDescriptionWrapper>
      </PageWrapper>
      <StyledCard>
        {data.map((item) => (
          // eslint-disable-next-line
          <Card {...item} />
        ))}
      </StyledCard>
    </>
  );
};

export default MainPage;
