import styled from '@emotion/styled';

export const Contact = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 8px;
  line-height: 1.4em;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ContactName = styled.span`
  max-width: 42%;
  flex-basis: 42%;
  margin-right: 10px;
  font-weight: 600;
  overflow-wrap: break-word;
`;

export const ContactNumber = styled.span`
  max-width: 35%;
  overflow-wrap: break-word;
`;
