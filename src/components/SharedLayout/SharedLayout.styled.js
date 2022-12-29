import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  min-height: 68px;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  background-color: rgb(50, 165, 207);
  color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  @media screen and (min-width: 720px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
