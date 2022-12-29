import styled from '@emotion/styled';

export const Contact = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 12px 8px;
  line-height: 1.4em;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const ContactName = styled.span`
  flex-basis: 50%;
  font-weight: 600;
  overflow-wrap: break-word;
`;

export const ContactNumber = styled.span`
  max-width: 35%;
  overflow-wrap: break-word;
`;
