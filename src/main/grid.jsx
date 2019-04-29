import React from 'react';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';

import Sections from './sections';
import Menu from './menu';

const Grid = () => {
  return (
    <Container style={{ height: '100%', width: '100%' }}>
      <Header>
        <div style={{ backgroundColor: '#383838', height: 40, borderBottom: '1px solid #333' }}>
          <span>HEADER</span>
        </div>
      </Header>
      <Container>
        <Sidebar width={56}>
          <Menu />
        </Sidebar>
        <Content>
          <Sections />
        </Content>
      </Container>
      <Footer>
        <div style={{ backgroundColor: '#383838', height: 20, borderTop: '1px solid #333' }}>
          <span>FOOTER</span>
        </div>
      </Footer>
    </Container>
  );
};

export default Grid;
