import React from 'react';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';

import HeaderCointainer from './header/header';
import FooterCointainer from './footer/footer';
import Menu from './menu/menu';
import Sections from './sections';

const Grid = () => {
  return (
    <Container style={{ height: '100%', width: '100%' }}>
      <Header style={{ zIndex: 1 }}>
        <HeaderCointainer />
      </Header>
      <Container>
        <Sidebar width={56}>
          <Menu />
        </Sidebar>
        <Content>
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
