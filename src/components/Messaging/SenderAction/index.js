import { MESSAGING_TYPE, SENDER_ACTIONS } from '../constants';

/*
  Message state to display to the user:

  typing_on: display the typing bubble
  typing_off: remove the typing bubble
  mark_seen: display the confirmation icon
  Cannot be sent with message.Must be sent as a separate request.

  When using sender_action, recipient should be the only other property set in the request.
*/
class SenderAction {

  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.type = props.type || MESSAGING_TYPE.RESPONSE;
    this.action = props.action || SENDER_ACTIONS.TYPING_ON;
    this.recipient = props.recipient || { id: '' };
  }

  appendChild(child) {
    // noop
  }

  removeChild(child) {
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
