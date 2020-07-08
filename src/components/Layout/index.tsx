import React from 'react';

import Main from '../Main';
import SideBar from '../SideBar';
import MenuBar from '../MenuBar';

import { Container, Warpper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Warpper>
        <MenuBar />
        <Main />
        <SideBar />
      </Warpper>
    </Container>
  );
};

export default Layout;
