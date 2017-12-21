const MESSAGING_TYPE = {
  RESPONSE: 'RESPONSE',
  UPDATE: 'UPDATE',
  MESSAGE_TAG: 'MESSAGE_TAG',
  NON_PROMOTIONAL_SUBSCRIPTION: 'NON_PROMOTIONAL_SUBSCRIPTION'
}


class Message {
  children = [];

  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.texts = [];
    this.type = props.type || MESSAGING_TYPE.RESPONSE;
    this.recipient = props.recipient || { id: '' };
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
