import React from 'react';
import styled from 'styled-components';

const DescriptionWrapper = styled.section`
  width: 80vw;
  word-spacing: 1px;
  margin-right: 10px;
`;

const DescriptionArticle = styled.article`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.extraLight};
  font-size: 1rem;
  padding: 4px 0 5px 0;
  margin-top: 5px;
`;

const DescriptionHeader = () => (
  <DescriptionWrapper>
    <DescriptionArticle>
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit...
    </DescriptionArticle>
    <DescriptionArticle>
      There is no one who loves pain itself, who seeks after it and wants to
      have it, simply because it is pain..
    </DescriptionArticle>
  </DescriptionWrapper>
);

export default DescriptionHeader;
