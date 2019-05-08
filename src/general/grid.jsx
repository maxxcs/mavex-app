import React from 'react';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import { isAuthenticated } from '../config/auth';

import HeaderCointainer from './header/header';
import FooterCointainer from './footer/footer';
import Menu from './menu/menu';
import Sections from './routes/sections';

const Grid = () => {
  const renderSidebar = () => (
    isAuthenticated() ? (
      <Sidebar width={56}>
        <Menu />
      </Sidebar>
    ) : null
  );

  return (
    <Container style={{ height: '100%', width: '100%' }}>
      <Header style={{ zIndex: 1 }}>
        <HeaderCointainer />
      </Header>
      <Container style={{ height: '100%', width: '100%' }}>
        { renderSidebar() }
        <Content style={{ height: '100%', width: '100%' }}>
          <Sections />
        </Content>
      </Container>
      <Footer style={{ zIndex: 1 }}>
        <FooterCointainer />
      </Footer>
    </Container>
  );
};

export default Grid;
