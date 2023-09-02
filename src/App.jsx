import React from 'react';
import { Continents } from './pages/continents';
import './styled.js';
import {
  FooterGrid, HeaderGrid, Item, LogoText, MainGrid, MainWrapp, SideBarGrid,
} from './styled.js';

function App() {
  return (
    <MainWrapp container>
      <HeaderGrid item lg={12}>
        <Item>
          <LogoText variant="h1" component="h2">TripMyDream</LogoText>
        </Item>
      </HeaderGrid>
      <SideBarGrid item lg={3}>
        <Item>Sidebar</Item>
      </SideBarGrid>
      <MainGrid item lg={9}>
        <Item>
          <Continents />
        </Item>
      </MainGrid>
      <FooterGrid item lg={12}>
        <Item>Footer</Item>
      </FooterGrid>
    </MainWrapp>
  );
}

export default App;
