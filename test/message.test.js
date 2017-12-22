import React from 'react';
import { render, Message, Text } from '../src';

test('should throw error without recipient', () => {
  const App = () => (
    <Message>
      <Text>Hello</Text>
    </Message>
  )

  expect(() => render(<App />)).toThrow('Message must have recipient')
});

test('should throw error without recipient detail', () => {
  const App = () => (
    <Message recipient={{ haha: '<PSID>' }}>
      <Text>Hello</Text>
    </Message>
  )

  expect(() => render(<App />)).toThrow('Recipient must include one of id, phone_number, or user_ref.')
});
