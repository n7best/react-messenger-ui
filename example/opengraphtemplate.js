import React from 'react';
import { render, Message, OpenGraphTemplate, OpenGraphElement, URLButton } from '../src';

const App = () => (
  <Message recipient={{ id: '<PSID>' }}>
    <OpenGraphTemplate>
      <OpenGraphElement url="<FACEBOOK_URL>">
        <URLButton url="magic link">
          world
        </URLButton>
      </OpenGraphElement>
    </OpenGraphTemplate>
  </Message>
);

console.log('output', JSON.stringify(render(<App />), null, 4));
