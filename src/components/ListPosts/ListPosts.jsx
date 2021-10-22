import React from 'react';
import styled from 'styled-components';
import { NavLink, useParams } from 'react-router-dom';
import { Title, Description, Button, CardDetails } from 'components';

const StyledWrapperList = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const StyledTitle = styled.div`
  margin-top: 10rem;
  background-color: #ebe2e2;
`;

const StyledDetails = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

const ListPosts = () => {
  const { comments } = useParams();
  // eslint-disable-next-line
  console.log(comments, 'cos');
  const isComment = true;
  return (
    <>
      <StyledWrapperList>
        <StyledTitle>
          <Title>
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </Title>
        </StyledTitle>
        <Description post>
          quia et suscipit suscipit recusandae consequuntur expedita et cum
          reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt
          rem eveniet architecto
        </Description>
        <StyledDetails>
          <CardDetails>UserId: 2</CardDetails>
          <CardDetails>PostId: 2</CardDetails>
        </StyledDetails>
        {isComment && (
          <StyledDetails>
            <Button>Edit post</Button>
            <Button as={NavLink} to="/user/post/2/comments">
              comments
            </Button>
          </StyledDetails>
        )}
      </StyledWrapperList>
    </>
  );
};
export default ListPosts;
