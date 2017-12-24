import { ATTACHMENT_TYPE, TEMPLATE_TYPE } from '../constants';
import Attachment from '../Attachment';

class Template extends Attachment {
  constructor(root, props) {
    super(root, {
      type: ATTACHMENT_TYPE.TEMPLATE
    });

    this.props = props;
    this.supportButtons = false;
    this.maxButtonLimit = 0;
    this.minButtonLimit = 0;
    this.maxElementLimit = 0;

    this.template = {
      template_type: props.type || TEMPLATE_TYPE.GENERIC
    };

    /*
    if (TEMPLATE_SUPPORT_BUTTONS.indexOf(this.template.template_type) > -1) {
      this.template.buttons = [];
      this.supportButtons = true;
    } */
  }

  renderTemplate() {
    return this.template;
  }

  addButton(button) {
    if (!this.supportButtons) return;
    if (this.template.buttons.length >= this.maxButtonLimit) {
      throw new Error(`You exceed the amoutn of button for ${this.template.template_type}`);
    }
    this.template.buttons.push(button);
  }
}

export default Template;
