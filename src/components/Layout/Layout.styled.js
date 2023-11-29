import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    justify-content: start;
    gap: 60px;
  }

  @media (min-width: 1440px) {
    gap: 100px;
  }

  img {
    cursor: pointer;
    height: 55px;
    transition: transform 0.3s ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }

    @media (min-width: 768px) {
      height: 70px;
    }
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  z-index: 1100;
  background: #040003;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    height: 85px;
  }

  @media (min-width: 1024px) {
    padding: 6px 40px;
  }
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;

  a.active {
    color: #3470ff;
  }

  @media (min-width: 768px) {
    gap: 15px;
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
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

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  height: 40px;
  line-height: 1.5;
  color: rgb(18 20 23 / 0.5);
  border-top: 1px solid #e9e9e9;
`;
