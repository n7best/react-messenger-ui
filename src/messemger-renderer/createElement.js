import { Message, Text, Response, SenderAction, Attachment } from '../components/Messaging';

function createElement(type, props, root) {
  console.log('creating element', type, props, root)
  const COMPONENTS = {
    MESSAGE: () => new Message(root, props),
    TEXT: () => new Text(root, props),
    RESPONSE: () => new Response(),
    SENDER_ACTION: () => new SenderAction(root, props),
    ATTACHMENT: () => new Attachment(root, props),
    default: undefined
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}

export {
  createElement
};
