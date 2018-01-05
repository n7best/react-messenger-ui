import { TEMPLATE_TYPE, BUTTON_TEMPLATE_TEXT_MAXLENGTH } from '../constants';
import { withButton } from '../Button';
import Template from './Template';

@withButton('template')
class ButtonTemplate extends Template {
  constructor(root, props) {
    super(root, {
      type: TEMPLATE_TYPE.BUTTON,
      children: props.children
    });

    this.maxButtonLimit = 3;
    this.minButtonLimit = 1;

    this.template.text = props.text || false;

    if (props.children) {
      props.children.forEach((child) => {
        if (typeof child === 'string') {
          this.template.text = child.trim();
        }
      });
    }
    this.validate();
  }

  validate() {
    // todo: use utf8js to check
    if (this.template.text.length > BUTTON_TEMPLATE_TEXT_MAXLENGTH) {
      throw new Error('Exceed max characters limit for text');
    }
  }

  appendChild(child) {
    // pass to withbutton it will filter by itself
    if (this.addButton) this.addButton(child);
  }
}

export default ButtonTemplate;
