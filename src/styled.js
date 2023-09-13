import { Grid, Typography, styled } from '@mui/material';

export const MainWrapp = styled(Grid)(() => ({
  height: '100vh',
  width: '100vw',
}));

export const LogoText = styled(Typography)(() => ({
  color: '#fff',
}));

export const Item = styled('div')(() => ({
  padding: 0,
  textAlign: 'center',
  overflow: 'auto',
  height: '100%',
}));

export const HeaderGrid = styled(Grid)(() => ({
  backgroundColor: '#a587ff',
  height: '15%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const SideBarGrid = styled(Grid)(() => ({
  backgroundColor: '#ebebff',
  height: '70%',
}));

export const MainGrid = styled(Grid)(() => ({
  backgroundColor: '#fff',
  height: '70%',
}));

export const FooterGrid = styled(Grid)(() => ({
  backgroundColor: '#a587ff',
  height: '15%',
}));
