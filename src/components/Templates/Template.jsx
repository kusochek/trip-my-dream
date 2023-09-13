import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  FooterGrid, HeaderGrid, Item, LogoText, MainGrid, MainWrapp, SideBarGrid,
} from '../../styled';

function Template() {
  return (
    <MainWrapp container>
      <HeaderGrid item lg={12}>
        <Item>
          <Link to='/tripMyDream'><LogoText variant="h1" component="h2">TripMyDream</LogoText></Link>
        </Item>
      </HeaderGrid>
      <SideBarGrid item lg={3}>
        <Item>Sidebar</Item>
      </SideBarGrid>
      <MainGrid item lg={9}>
        <Item>
          <Outlet />
        </Item>
      </MainGrid>
      <FooterGrid item lg={12}>
        <Item>Footer</Item>
      </FooterGrid>
    </MainWrapp>
  );
}

export default Template;
