import styled from '@emotion/styled';

export const Contact = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
  margin-bottom: 8px;
  padding: 12px 8px;
  line-height: 1.4em;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const ContactName = styled.span`
  flex: 1;
  font-weight: 500;
  overflow-wrap: break-word;

  @media screen and (max-width: 420px) {
    flex: 420px;
  }
`;

export const ContactNumber = styled.span`
  flex: 1;
  overflow-wrap: break-word;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
