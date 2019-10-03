import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  Container, Header, Content, Footer,
} from 'rsuite';

import store from '@config/store';
import '@config/client';
import './main.less';

import HeaderCointainer from './header/header';
import FooterCointainer from './footer/footer';
import Menu from './menu/menu';
import Sections from './routes/sections';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container className="full">
        <Header style={{ zIndex: 10 }}>
          <HeaderCointainer />
        </Header>
        <Container className="flex-row full">
          <Menu />
          <Content className="full">
            <Sections />
          </Content>
        </Container>
        <Footer style={{ zIndex: 10 }}>
          <FooterCointainer />
        </Footer>
      </Container>
    </BrowserRouter>
  </Provider>
);

export default App;
