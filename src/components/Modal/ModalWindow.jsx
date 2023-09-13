import React from 'react';
import { Paper } from '@mui/material';
import { ModalWrapp } from './styled';

export default function ModalWindow({ description }) {
  return (
    <ModalWrapp>
      <Paper style={{ width: '400px' }}>{description}</Paper>
    </ModalWrapp>
  );
}
