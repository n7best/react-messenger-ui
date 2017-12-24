import React from 'react';
import { render, Message, GenericTemplate, GenericElement, URLButton, PostbackButton, ShareButton, CallButton } from '../src';

test('should render generic tempalte response', () => {
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
      </GenericTemplate>
    </Message>
  )

  expect(render(<App />)).toMatchSnapshot()
});

test('should throw since max button is exceed on one template', () => {
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
            <URLButton url="magic link">
              world
          </URLButton>
          <URLButton url="magic link">
            world
          </URLButton>
        </GenericElement>
      </GenericTemplate>
    </Message>
  )

  expect(() => render(<App />)).toThrow()
});
