/* eslint-disable no-param-reassign */
import { TEMPLATE_TYPE } from '../../constants';
import Template from '../Template';

class GenericTemplate extends Template {
  constructor(root, props) {
    super(root, {
      type: TEMPLATE_TYPE.GENERIC,
      children: props.children
    });

    this.sharable = props.sharable;
    this.image_aspect_ratio = props.imageAspectRatio;
    this.maxElementLimit = 10;
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
    console.log('123123', this.elements);
    return Object.assign({}, this.template, {
      sharable: this.sharable,
      image_aspect_ratio: this.image_aspect_ratio,
      elements: this.elements.map(element => element.render())
    });
  }

  appendChild(child) {
    // pass to withbutton it will filter by itself
    if (this.addButton) this.addButton(child);
    this.addElement(child);
  }
}

export default GenericTemplate;
