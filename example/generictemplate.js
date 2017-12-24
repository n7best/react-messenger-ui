import React from 'react';
import { render, Message, GenericTemplate, GenericElement, URLButton, PostbackButton } from '../src';

const App = () => (
  <Message recipient={{ id: '<PSID>' }}>
    <GenericTemplate>
      <GenericElement title="Generic Element">
        <URLButton url="magic link">
          world
        </URLButton>
        <PostbackButton payload="magic payload">
          world
        </PostbackButton>
        <URLButton url="magic link">
          world
        </URLButton>
      </GenericElement>
      <GenericElement title="Generic Element 2">
        <URLButton url="magic link">
          world
        </URLButton>
        <PostbackButton payload="magic payload">
          world
        </PostbackButton>
      </GenericElement>
    </GenericTemplate>
  </Message>
);

console.log('output', JSON.stringify(render(<App />), null, 4));
