import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  text-align: center;
  margin-top: 36px;
  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    margin: 48px;
    font-size: 48px;
  }
`;
