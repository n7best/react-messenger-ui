import React from 'react';
import { render, Message, Text, QuickReply } from '../src';
import { CONSTANTS } from '../src/components/Messaging/index';

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
