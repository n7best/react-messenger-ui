import React from 'react';
import { render, Message, ListTemplate, ListElement, URLButton } from '../src';

const App = () => (
  <Message recipient={{ id: '<PSID>' }}>
    <ListTemplate>
      <ListElement title="Generic Element">
        <URLButton url="magic link">
          world
        </URLButton>
      </ListElement>
      <ListElement title="Generic Element 2">
        <URLButton url="magic link">
          world
        </URLButton>
      </ListElement>
    </ListTemplate>
  </Message>
);

console.log('output', JSON.stringify(render(<App />), null, 4));
