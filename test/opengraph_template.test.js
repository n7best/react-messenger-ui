import React from 'react';
import { render, Message, OpenGraphTemplate, OpenGraphElement, URLButton, PostbackButton, ShareButton, CallButton, CONSTANTS } from '../src';

test('should render media template response', () => {
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
  )

  expect(render(<App />)).toMatchSnapshot()
});

