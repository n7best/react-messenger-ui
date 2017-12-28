import React from 'react';
import { render, Message, MediaTemplate, MediaElement, URLButton, PostbackButton, ShareButton, CallButton, CONSTANTS } from '../src';

test('should render media template response', () => {
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <MediaTemplate>
        <MediaElement type={CONSTANTS.MEDIA_TYPE.IMAGE} url="<FACEBOOK_URL>" />
      </MediaTemplate>
    </Message>
  )

  expect(render(<App />)).toMatchSnapshot()
});

test('should throw since both url and attachment id exceed on one elment', () => {
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <MediaTemplate>
        <MediaElement type={CONSTANTS.MEDIA_TYPE.IMAGE} url="<FACEBOOK_URL>" attachmentId="123123"/>
      </MediaTemplate>
    </Message>
  )

  expect(() => render(<App />)).toThrow()
});

test('should throw since both url and attachment id is not provided', () => {
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <MediaTemplate>
        <MediaElement type={CONSTANTS.MEDIA_TYPE.IMAGE} />
      </MediaTemplate>
    </Message>
  )

  expect(() => render(<App />)).toThrow()
});
