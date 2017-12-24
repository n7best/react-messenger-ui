import React from 'react';
import { render, Message, ButtonTemplate, URLButton, PostbackButton } from '../src';

const App = () => (
  <Message recipient={{ id: '<PSID>' }}>
    <ButtonTemplate>
        hello
      <URLButton url="magic link">
        world
      </URLButton>
      <PostbackButton payload="magic payload">
        world
      </PostbackButton>
    </ButtonTemplate>
  </Message>
);

console.log('output', JSON.stringify(render(<App />), null, 4));
