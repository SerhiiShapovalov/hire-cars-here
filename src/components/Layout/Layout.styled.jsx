import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: start;
  top: 0;
  left: 0;
  width: 100vw;
  height: 85px;
  z-index: 1100;
  background: #040003;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    
  img {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 15px;
  padding: 0 15px;
  font-size: 20px;
  font-weight: 600;

  a.active {
    color: #3470ff;
  }
`;

export const CurrentLink = styled(NavLink)`
  transition: all 0.3s ease-in-out;
  color: #fff;

  &:hover,
  &:focus {
    color: #3470ff;
    transform: scale(1.1);
  }

  a.active {
    color: #3470ff;
  }
`;
