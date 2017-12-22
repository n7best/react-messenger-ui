import React from 'react';
import { render, SenderAction, Text, CONSTANTS } from '../src';

['mark_seen', 'typing_on', 'typing_off'].forEach(action_type => {
  test(`should render ${action_type} response`, () => {
    const Test = () => (
      <SenderAction action={CONSTANTS.SENDER_ACTIONS[action_type.toUpperCase()]} recipient={{ id: '<PSID>' }} />
    )

    expect(render(<Test action="" />)).toEqual(
      {
        messaging_type: 'RESPONSE',
        recipient: { id: '<PSID>' },
        sender_action: action_type
      }
    );
  });
});
