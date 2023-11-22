import React, { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from '../Container/Container';
import {
  Wrapper,
  Header,
  Main,
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
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <img
              src={logo192}
              alt="cars"
              style={{ height: 75, marginRight: 20, cursor: 'pointer' }}
              onClick={goToHome}
            />
            <NavList>
              <CurrentLink to="/">Home</CurrentLink>
              <CurrentLink to="/catalog">Catalog</CurrentLink>
              <CurrentLink to="/favorites">Favorites</CurrentLink>
            </NavList>
          </nav>
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
