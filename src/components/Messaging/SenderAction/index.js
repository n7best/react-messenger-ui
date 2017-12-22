import Message from '../Message';
import { SENDER_ACTIONS } from '../constants';

/*
  Message state to display to the user:

  typing_on: display the typing bubble
  typing_off: remove the typing bubble
  mark_seen: display the confirmation icon
  Cannot be sent with message.Must be sent as a separate request.

  When using sender_action, recipient should be the only other property set in the request.
*/
class SenderAction extends Message {
  constructor(root, props) {
    super(root, props);
    this.action = props.action || SENDER_ACTIONS.TYPING_ON;
  }

  appendChild() {
    // noop
  }

  removeChild() {
    // noop
  }

  render() {
    return {
      messaging_type: this.type,
      recipient: this.recipient,
      sender_action: this.action
    };
  }
}

export default SenderAction;
