import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  margin: 0 auto;
  padding: 24px;

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 12px;
  }
`;

export const TextWrap = styled.div`
  max-width: 800px;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 40px auto;
  font-size: 32px;
  font-weight: 500;
  border-bottom: 1px solid #ccc;

  @media screen and (min-width: 1024px) {
    margin: 48px auto;
    font-size: 48px;
  }
`;

export const Title = styled.p`
  white-space: nowrap;
  flex-grow: 1;
`;

export const Span = styled.span`
  white-space: nowrap;
  font-size: 20px;
  color: #999;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const ImageWrap = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;
