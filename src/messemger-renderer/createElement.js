import * as components from '../components/Messaging';

const { Response, CONSTANTS, ...others } = components;

function createElement(type, props, root) {
  console.log('creating element', type, props, root, others);
  const COMPONENTS = {
    RESPONSE: () => new Response(),
    default: undefined
  };

  Object.keys(others).forEach((key) => {
    COMPONENTS[key.toUpperCase()] = () => new others[key](root, props);
  });

  return COMPONENTS[type]() || COMPONENTS.default;
}

export {
  createElement
};
