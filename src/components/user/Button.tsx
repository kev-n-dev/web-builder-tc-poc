// src/components/user/Button.tsx
import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  variant: 'text' | 'contained' | 'outlined';
  color: 'default' | 'inherit' | 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ size, variant, color, children }) => (
  <MuiButton size={size} variant={variant} color={color}>
    {children}
  </MuiButton>
);