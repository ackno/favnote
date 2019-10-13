import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <Button>Hello</Button>
    <Button secondary>world</Button>
    <Button width="400px">Och</Button>
  </>
);

export default Root;
