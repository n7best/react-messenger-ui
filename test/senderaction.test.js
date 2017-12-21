import React from 'react';
import { render, SenderAction, Text, CONSTANTS } from '../src';

test('should render mark_seen response', () => {
  const Test = () => (
    <SenderAction action={CONSTANTS.SENDER_ACTIONS.MARK_SEEN}/>
  )

  expect(render(<Test action=""/>)).toEqual(
    {
      messaging_type: 'RESPONSE',
      recipient: { id: '' },
      sender_action: 'mark_seen'
    }
  );
});

test('should render typing_on response', () => {
  const Test = () => (
    <SenderAction action={CONSTANTS.SENDER_ACTIONS.TYPING_ON} />
  )

  expect(render(<Test action="" />)).toEqual(
    {
      messaging_type: 'RESPONSE',
      recipient: { id: '' },
      sender_action: 'typing_on'
    }
  );
});

test('should render typing_off response', () => {
  const Test = () => (
    <SenderAction action={CONSTANTS.SENDER_ACTIONS.TYPING_OFF} />
  )

  expect(render(<Test action="" />)).toEqual(
    {
      messaging_type: 'RESPONSE',
      recipient: { id: '' },
      sender_action: 'typing_off'
    }
  );
});

