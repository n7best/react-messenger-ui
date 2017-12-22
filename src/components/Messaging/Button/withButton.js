/* eslint-disable no-param-reassign */
import Button from './Button';
import { BUTTON_TEMPLATE_SUPPORT } from '../constants';

function withButton(type) {
  return function decorator(Class) {
    class TemplateWithButton extends Class {
      constructor(root, props) {
        super(root, props);

        // initialize button
        this.template.buttons = [];
        this.supportButtons = true;
      }

      addButton(button) {
        if (button instanceof Button) {
          if (BUTTON_TEMPLATE_SUPPORT[button.type].indexOf(this.template.template_type) === -1) {
            throw new Error(`Button type: ${button.type} is not support by Template: ${this.template.template_type}`);
          }

          this.template.buttons.push(button.render());

          // todo: validate buttons
        }
      }
    }

    return (root, props) => {
      switch (type) {
        case 'template':
          return new TemplateWithButton(root, props);
        default:
          throw new Error('withButton type not valid');
      }
    };
  };
}

export default withButton;
