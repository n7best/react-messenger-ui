import React from 'react';
import { render, Message, ButtonTemplate, URLButton } from '../src';

test('should render basic text response', () => {
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <ButtonTemplate>
        hello
      <URLButton url="magic link">
          world
      </URLButton>
      </ButtonTemplate>
    </Message>
  )

  expect(render(<App />)).toMatchSnapshot()
});
