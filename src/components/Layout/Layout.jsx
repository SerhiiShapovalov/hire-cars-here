import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Header, NavList, CurrentLink } from './Layout.styled';
import logo192 from '../../components/UI/img/logo192.png';

const Layout = () => {
  return (
    <>
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
              to="/"             
            />
            <NavList>
              <CurrentLink to="/">Home</CurrentLink>
              <CurrentLink to="/catalog">Catalog</CurrentLink>
              <CurrentLink to="/favorites">Favorites</CurrentLink>
            </NavList>
          </nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
