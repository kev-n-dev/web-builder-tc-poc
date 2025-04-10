// src/theme.ts
import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
  // Add other theme variables as needed
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.primaryColor};
    color: white;
  }
  // Add other global styles as needed
`;
