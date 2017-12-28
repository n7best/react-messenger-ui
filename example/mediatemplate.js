import React from 'react';
import { render, Message, MediaTemplate, MediaElement, CONSTANTS } from '../src';

const App = () => (
  <Message recipient={{ id: '<PSID>' }}>
    <MediaTemplate>
      <MediaElement type={CONSTANTS.MEDIA_TYPE.IMAGE} url="<FACEBOOK_URL>" />
    </MediaTemplate>
  </Message>
);

console.log('output', JSON.stringify(render(<App />), null, 4));
