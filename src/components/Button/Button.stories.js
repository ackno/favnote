import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';

import Button from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('as primary with dynamic props', () => {
  const group = 'GROUP-ID-1';

  const colorOptions = {
    yellow: 'hsl(49, 100%, 58%)',
    blue: 'hsl(196, 83%, 75%)',
    green: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = colorOptions.yellow;
  const color = select('Background color', colorOptions, defaultValue, group);

  const widthOptions = {
    range: true,
    min: 50,
    max: 800,
    step: 10,
  };
  const width = number('Width (px)', '220', widthOptions, group);

  return (
    <Button color={color} width={`${width}px`}>
      Hello World
    </Button>
  );
});

stories.add('as secondary', () => <Button secondary>Hello World</Button>);
