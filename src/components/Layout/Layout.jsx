import React, { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from '../Container/Container';
import {
  Wrapper,
  Header,
  Main,
  Nav,
  NavList,
  CurrentLink,
  Footer,
} from './Layout.styled';
import logo192 from '../../components/UI/img/logo192.png';

const Layout = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <Header>
        <Container>
          <Nav>
            <img src={logo192} alt="cars" onClick={goToHome} />
            <NavList>
              <CurrentLink to="/">Home</CurrentLink>
              <CurrentLink to="/catalog">Catalog</CurrentLink>
              <CurrentLink to="/favorites">Favorites</CurrentLink>
            </NavList>
          </Nav>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer>Created with 😳 in 2023</Footer>
    </Wrapper>
  );
};

export default Layout;
