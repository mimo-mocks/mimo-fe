import React from 'react';

// styled
import { Container, Main } from './styled';

// components
import Logo from 'components/common/Logo';
import Header from 'components/common/Header';
import Sidebar from 'components/common/Sidebar';

// types
import { MainLayoutProps } from './types';

const MainLayout = ({ children }: MainLayoutProps) => (
  <Container>
    <Logo />
    <Header />
    <Sidebar />
    <Main>{children}</Main>
  </Container>
);

export default MainLayout;
