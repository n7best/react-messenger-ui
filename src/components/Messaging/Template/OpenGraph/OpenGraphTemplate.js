/* eslint-disable no-param-reassign */
import { TEMPLATE_TYPE } from '../../constants';
import Template from '../Template';

class OpenGraphTemplate extends Template {
  constructor(root, props) {
    super(root, {
      type: TEMPLATE_TYPE.OPEN_GRAPH,
      children: props.children
    });

    this.maxElementLimit = 1;
    this.elements = [];
  }

  addElement(element) {
    if (element.constructor.name === 'ElementWithButton') {
      this.elements.push(element);

      if (this.elements.length > this.maxElementLimit) {
        throw new Error('Exceed max element allow for Generic Template');
      }
    }
  }

  renderTemplate() {
    return Object.assign({}, this.template, {
      elements: this.elements.map(element => element.render())
    });
  }

  appendChild(child) {
    // pass to withbutton it will filter by itself
    if (this.addButton) this.addButton(child);
    this.addElement(child);
  }
}

export default OpenGraphTemplate;
