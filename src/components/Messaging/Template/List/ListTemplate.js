/* eslint-disable no-param-reassign */
import { TEMPLATE_TYPE } from '../../constants';
import { withButton } from '../../Button';
import Template from '../Template';

@withButton('template')
class ListTemplate extends Template {
  constructor(root, props) {
    super(root, {
      type: TEMPLATE_TYPE.LIST,
      children: props.children
    });

    this.sharable = props.sharable;
    this.top_element_style = props.topElementStyle;
    this.maxElementLimit = 10;
    this.maxButtonLimit = 1;
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
      top_element_style: this.top_element_style,
      buttons: this.template.buttons,
      elements: this.elements.map(element => element.render())
    });
  }

  appendChild(child) {
    // pass to withbutton it will filter by itself
    if (this.addButton) this.addButton(child);
    this.addElement(child);
  }
}

export default ListTemplate;
