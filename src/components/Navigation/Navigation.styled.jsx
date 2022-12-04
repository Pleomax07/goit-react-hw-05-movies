import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 4px 6px;
  margin-bottom: 5px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  list-style-type: none;
  
  &.active {
    color: #3f51b5;
  }
`;

export const List = styled.ul`
display: flex;
text-decoration: none;
list-style-type: none;

`;