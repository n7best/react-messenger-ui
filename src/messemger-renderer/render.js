import { createElement } from './createElement';
import { Renderer } from './renderer';
import parse from './parse';

export function render(element) {
  const container = createElement('RESPONSE');
  const node = Renderer.createContainer(container);

  Renderer.updateContainer(element, node, null);

  const output = parse(container).toBuffer();

  return output;
}
