import { Message, Text, Response } from '../components/Messaging';

function createElement(type, props, root) {
  console.log('creating element', type, props, root)
  const COMPONENTS = {
    MESSAGE: () => new Message(root, props),
    TEXT: () => new Text(root, props),
    RESPONSE: () => new Response(),
    default: undefined
  };

  return COMPONENTS[type]() || COMPONENTS.default;
}

export {
  createElement
};
