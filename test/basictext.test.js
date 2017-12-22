import React from 'react';
import { render, Message, Text } from '../src';

test('should render basic text response', () => {
  const App = () => (
    <Message recipient={{ id: '<PSID>'}}>
      <Text>Hello</Text>
    </Message>
  )

  expect(render(<App />)).toEqual(
    {
      messaging_type: 'RESPONSE',
      recipient: { id: '<PSID>' },
      message: { text: 'Hello' }
    }
  );
});
