import { MESSAGING_TYPE } from '../constants';

class Message {
  children = [];

  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.texts = [];
    this.type = props.type || MESSAGING_TYPE.RESPONSE;
    this.recipient = props.recipient || { id: '' };

    /*
      Message state to display to the user:

      typing_on: display the typing bubble
      typing_off: remove the typing bubble
      mark_seen: display the confirmation icon
      Cannot be sent with message.Must be sent as a separate request.

      When using sender_action, recipient should be the only other property set in the request.
     */
    this.sender_action = props.senderAction || false;
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children.splice(
      this.children.indexOf(child),
      1
    );
  }

  addText(text) {
    this.texts.push(text);
  }

  renderChildren() {
    this.children.forEach((child) => {
      if (typeof child === 'string') {
        this.texts.push(child);
      } else if (child.constructor.name === 'Text') {
        this.texts.push(child.render());
      } else {
        child.render();
      }
    });
  }

  render() {
    this.renderChildren();

    return {
      messaging_type: this.type,
      recipient: this.recipient,
      /*
        id: '<PSID>'

        Phone number: If you know a user's phone number, you can specify recipient.phone_number
        in the API request. This will send a message request to the recipient, without
        requiring them to interact with your page first. Sending messages to phone
        numbers requires the pages_messaging_phone_number permission. For more
        information, see Customer Matching.
      */

      /*
        User Ref: For more information, see https://developers.facebook.com/docs/messenger-platform/discovery/checkbox-plugin.
      */
      message: {
        text: this.texts.join(' '),
      }
    };
  }
}

export default Message;
