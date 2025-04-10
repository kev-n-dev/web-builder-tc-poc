// src/App.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './theme';
import WebBuilderEditor from './components/WebBuilderEditor.tsx';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WebBuilderEditor />
    </ThemeProvider>
  );
};

export default App;
