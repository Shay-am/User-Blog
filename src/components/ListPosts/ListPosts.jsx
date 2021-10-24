import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Title, Description, Button, Paragraph } from 'components';

const StyledWrapperList = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const StyledTitle = styled.div`
  margin-top: 10rem;
  text-align: center;
`;

const StyledDetails = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

const StyledDescription = styled.section`
  width: 80vw;
`;

const ListPosts = ({ isComment }) => (
  <>
    <StyledWrapperList>
      <StyledTitle>
        <Title type="h2">
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </Title>
      </StyledTitle>
      <StyledDescription>
        <Description post>
          quia et suscipit suscipit recusandae consequuntur expedita et cum
          reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt
          rem eveniet architecto
        </Description>
      </StyledDescription>
      <StyledDetails>
        <Paragraph>UserId: 2</Paragraph>
        <Paragraph>PostId: 2</Paragraph>
      </StyledDetails>
      {!isComment && (
        <StyledDetails>
          <Button as={NavLink} to="/edit">
            Edit post
          </Button>
          <Button as={NavLink} to="/comments">
            comments
          </Button>
        </StyledDetails>
      )}
    </StyledWrapperList>
  </>
);
export default ListPosts;
