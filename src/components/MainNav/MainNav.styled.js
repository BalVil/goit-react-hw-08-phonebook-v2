import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: #f1f3f5;
  font-size: 16px;

  &.active {
    color: #3e61a0;
  }
`;
