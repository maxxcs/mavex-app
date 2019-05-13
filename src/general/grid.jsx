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
    <Container className="full">
      <Header style={{ zIndex: 10 }}>
        <HeaderCointainer />
      </Header>
      <Container className="full">
        { renderSidebar() }
        <Content className="full">
          <Sections />
        </Content>
      </Container>
      <Footer style={{ zIndex: 10 }}>
        <FooterCointainer />
      </Footer>
    </Container>
  );
};

export default Grid;
