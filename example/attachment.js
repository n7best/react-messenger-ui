import React from 'react';
import { render, Message, Attachment } from '../src';

const App = () => (
  <Message recipient={{ id: '<PSID>' }}>
    <Attachment url="test"/>
  </Message>
);

console.log('output', render(<App />));
