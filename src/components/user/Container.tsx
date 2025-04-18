// src/components/user/Container.tsx
import React from 'react';
import { Paper } from '@mui/material';

interface ContainerProps {
  background: string;
  padding: number;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ background, padding, children }) => (
  <Paper style={{ margin: '5px 0', background, padding: `${padding}px` }}>
    {children}
  </Paper>
);




