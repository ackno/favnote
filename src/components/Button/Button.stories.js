import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button>Hello world</Button>)
  .add('Secondary', () => <Button secondary>Hello world</Button>)
  .add('with width', () => <Button width="600px">Hello world</Button>);
