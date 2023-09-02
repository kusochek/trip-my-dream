import { styled } from "styled-components";

export const ModalWrapp = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2,
  height: '100vh',
  width: '100vw',
  backgroundColor: '#0000008f',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
