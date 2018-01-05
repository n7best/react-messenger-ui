import React from 'react';
import { render, Message, ButtonTemplate, URLButton, PostbackButton, ShareButton, CallButton } from '../src';

test('should render button tempalte response', () => {
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
        <CallButton payload="+1234567890">
          call
        </CallButton>
      </ButtonTemplate>
    </Message>
  )

  expect(render(<App />)).toMatchSnapshot()
});

test('should throw since share is not support by button template', () => {
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
        <ShareButton payload="magic share">
          world
        </ShareButton>
      </ButtonTemplate>
    </Message>
  )

  expect(()=>render(<App />)).toThrow()
});


