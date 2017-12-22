import React from 'react';
import FormData from 'form-data';
import { fs } from 'memfs'
import { render, Message, Text, Attachment, QuickReply } from '../src';
import { CONSTANTS } from '../src/components/Messaging/index';

beforeAll(() => {
  fs.writeFileSync('/hello.jpg', 'IMAGE_DATA');

  // avoid random boundry
  FormData.prototype._generateBoundary = function () {
    var boundary = '--------------------------';
    this._boundary = boundary;
  };
});

test('should render basic text response with quickreply', () => {
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Text>Hello</Text>
      <QuickReply title="Search" payload="<POSTBACK_PAYLOAD>"/>
    </Message>
  )

  expect(render(<App />)).toEqual(
    {
      messaging_type: 'RESPONSE',
      recipient: { id: '<PSID>' },
      message: {
        text: 'Hello',
        quick_replies: [
          {
            content_type: 'text',
            title: 'Search',
            payload: '<POSTBACK_PAYLOAD>'
          }
        ]
      }
    }
  );
});

test('should render basic text response with location quick reply', () => {
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Text>Hello</Text>
      <QuickReply type={CONSTANTS.QUICKREPLY_TYPE.LOCATION}/>
    </Message>
  )

  expect(render(<App />)).toEqual(
    {
      messaging_type: 'RESPONSE',
      recipient: { id: '<PSID>' },
      message: {
        text: 'Hello',
        quick_replies: [
          {
            content_type: 'location',
          }
        ]
      }
    }
  );
});

test('should render quickreply with file upload', () => {
  const file = fs.readFileSync('/hello.jpg', 'utf8')
  const expectFormData = new FormData();
  expectFormData.append('recipient', JSON.stringify({ id: '<PSID>' }));
  expectFormData.append('message', JSON.stringify({
    attachment: {
      type: 'audio',
      payload: {
        is_reusable: true
      }
    },
    quick_replies: [
      {
        content_type: 'text',
        title: 'Search',
        payload: '<POSTBACK_PAYLOAD>'
      },
      {
        content_type: 'location',
      }
    ]
  }));
  expectFormData.append('filedata', file);

  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Attachment
        file={file}
        type={CONSTANTS.ATTACHMENT_TYPE.AUDIO}
        source={CONSTANTS.ATTACHMENT_SOURCE.FILE} />
      <QuickReply title="Search" payload="<POSTBACK_PAYLOAD>" />
      <QuickReply type={CONSTANTS.QUICKREPLY_TYPE.LOCATION} />
    </Message>
  )

  expect(JSON.stringify(render(<App />))).toEqual(JSON.stringify(expectFormData));
});

test('should throw over max quickreply allow', () => {
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Text>Hello</Text>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => <QuickReply key={i} type={CONSTANTS.QUICKREPLY_TYPE.LOCATION} />)
      }
    </Message>
  )

  expect(() => render(<App />)).toThrow('Exceed max quickreplies allow');
});
