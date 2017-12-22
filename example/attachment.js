import React from 'react';
import { fs } from 'memfs';
import { render, Message, Attachment, CONSTANTS } from '../src';
fs.writeFileSync('/hello.jpg', 'IMAGE_DATA');

const App = () => (
  <Message recipient={{ id: '<PSID>' }}>
    <Attachment
      file={fs.readFileSync('/hello.jpg', 'utf8')}
      type={CONSTANTS.ATTACHMENT_TYPE.AUDIO}
      source={CONSTANTS.ATTACHMENT_SOURCE.FILE} />
  </Message>
);

console.log('output', render(<App />));
