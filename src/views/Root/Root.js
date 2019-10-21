import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Button>Hello</Button>
        <Button secondary>world</Button>
        <Button width="400px">Och</Button>
      </>
    </ThemeProvider>
  </>
);

export default Root;
